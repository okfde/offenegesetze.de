import React from 'react';
import ReactAutocomplete from 'react-autocomplete';

import { PRIMARY_COLOR } from '../../misc/config';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.q || '',
      suggestions: [],
      seriousNLP: null,
      loading: false,
    };
  }

  _onSelect = (value, item) => {
    console.log(value, item);
    if (item.hasOwnProperty('special')) window.location.assign(item.id);
    else window.location.assign(`/suche?q=${value}`);
  };

  //  5. September 2005 (BGBl. I S. 2722),
  _checkForCitation = async text => {
    const re = /.*(19[4-9]\d|20\d{2})\s.*bgbl.*(i|ii)\D*(\d+)\D*/i;
    const groups = text.match(re);

    if (groups !== null && groups.length === 4) {
      const year = groups[1];
      const kind = groups[2];

      let kindFixed = 'bgbl';
      if (kind.toLowerCase() === 'i') {
        kindFixed += '1';
      }
      if (kind.toLowerCase() === 'ii') {
        kindFixed += '2';
      }

      const page = groups[3];

      const res = await fetch(
        `https://api.offenegesetze.de/v1/veroeffentlichung/?page=${page}&kind=${kindFixed}&year=${year}`
      );
      const jres = await res.json();

      if (jres.count === 1) {
        this.setState({
          seriousNLP: {
            year,
            kind,
            page,
            url: jres.results[0].url,
            title: jres.results[0].title,
          },
        });
      } else this.setState({ seriousNLP: null });
    } else {
      this.setState({ seriousNLP: null });
    }
  };

  _onChange = async e => {
    const { value } = e.target;
    this.setState({ value });

    this._checkForCitation(value);

    const res = await fetch(
      `https://api.offenegesetze.de/v1/veroeffentlichung/?q=${value}`
    );
    const json = await res.json();

    let suggestions = json.results
      .map(x =>
        ((x.title__highlight && x.title__highlight[0]) || '').match(
          /<em>(.*)<\/em>/
        )
      )
      .filter(x => x !== null)
      .map(x => x[1].replace(/<\/?em>/g, ''));
    suggestions = Array.from(new Set(suggestions));

    if (suggestions.length > 0) {
      this.setState({
        suggestions,
      });
    }
  };

  render() {
    const items = this.state.suggestions.map(x => ({
      id: x,
      label: x,
    }));
    if (this.state.seriousNLP != null) {
      items.push({
        special: true,
        id: this.state.seriousNLP.url,
        label: `Veröffentlichung aus Jahr ${this.state.seriousNLP.year} BGBl. ${
          this.state.seriousNLP.kind
        } Seite ${this.state.seriousNLP.page}: ${this.state.seriousNLP.title}`,
      });
    }

    return (
      <form action="/suche" style={{ width: '100%' }}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <ReactAutocomplete
              items={items}
              shouldItemRender={(item, value) =>
                item.label.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
                item.hasOwnProperty('special')
              }
              getItemValue={item => item.label}
              renderItem={(item, highlighted) => (
                <div
                  key={`${item.id}_${highlighted}`}
                  style={{
                    backgroundColor: highlighted
                      ? PRIMARY_COLOR
                      : 'transparent',
                  }}
                >
                  {item.label}
                </div>
              )}
              value={this.state.value}
              onChange={this._onChange}
              onSelect={this._onSelect}
              inputProps={{
                name: 'q',
                className: 'input',
                type: 'text',
                placeholder:
                  'Suche in über 8000 Veröffentlichungen. Zum Beispiel "Asyl", "Münzen" oder "27. Februar 2007 (BGBl. I S. 221)"',
              }}
              wrapperStyle={{ display: 'inline' }}
              menuStyle={{
                borderRadius: '3px',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
                background: 'rgba(255, 255, 255, 0.98)',
                padding: '5px',
                fontSize: '90%',
                position: 'fixed',
                overflow: 'auto',
                maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
              }}
            />
          </div>
          <div className="control">
            <button type="submit" className="button is-primary">
              <span className="icon is-small">
                <i className="fas fa-search" />
              </span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBox;
