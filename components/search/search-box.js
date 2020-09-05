import React from 'react';
import ReactAutocomplete from 'react-autocomplete';

import { KINDS, PRIMARY_COLOR } from '../../misc/config';

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
    if (item.special) {
      window.location.assign(item.url);
    } else {
      window.location.assign(`/suche?q=${value}`);
    }
  };

  //  5. September 2005 (BGBl. I S. 2722),
  _checkForCitation = (text) => {
    const re = /.*(19[4-9]\d|20\d{2})\s.*bgbl.*(i|ii)\D*(\d+)\D*/i;
    const groups = text.match(re);

    if (groups !== null && groups.length === 4) {
      const year = groups[1];
      const kindMatch = groups[2];

      let kind = 'bgbl';
      if (kindMatch.toLowerCase() === 'i') {
        kind += '1';
      }
      if (kindMatch.toLowerCase() === 'ii') {
        kind += '2';
      }

      const page = groups[3];

      return {
        page,
        kind,
        year,
      };
    }
    return null;
  };

  _loadCitation = async (params) => {
    const { page, kind, year } = params;
    const res = await fetch(
      `https://api.offenegesetze.de/v1/veroeffentlichung/?page=${page}&kind=${kind}&year=${year}`
    );
    const jres = await res.json();

    if (jres.count !== 0) {
      // Jump to first page of result, which is fine
      this.setState({
        seriousNLP: jres.results.map((item) => ({
          year,
          kind,
          page,
          url: item.url,
          title: item.title,
        })),
      });
      return true;
    }
    this.setState({ seriousNLP: null });
    return false;
  };

  _onChange = async (e) => {
    const { value } = e.target;
    this.setState({ value });

    const citation = this._checkForCitation(value);
    if (citation !== null) {
      const found = await this._loadCitation(citation);
      if (found) {
        return;
      }
    }

    const res = await fetch(
      `https://api.offenegesetze.de/v1/veroeffentlichung/?q=${value}`
    );
    const json = await res.json();

    let suggestions = json.results
      .map((x) =>
        ((x.title__highlight && x.title__highlight[0]) || '').match(
          /<em>(.*)<\/em>/
        )
      )
      .filter((x) => x !== null)
      .map((x) => x[1].replace(/<\/?em>/g, ''));
    suggestions = Array.from(new Set(suggestions));

    if (suggestions.length > 0) {
      this.setState({
        suggestions,
      });
    }
  };

  render() {
    const items = this.state.suggestions.map((x) => ({
      id: x,
      label: x,
    }));
    if (this.state.seriousNLP !== null) {
      this.state.seriousNLP.forEach((item) => {
        items.push({
          special: true,
          id: item.url + item.title,
          url: item.url,
          label: `Veröffentlichung Jahr ${item.year} ${
            KINDS[item.kind].name
          } Seite ${item.page}: ${item.title}`,
        });
      });
    }

    return (
      <div className="field has-addons">
        <div className="control is-expanded">
          <ReactAutocomplete
            items={items}
            shouldItemRender={(item, value) =>
              item.label.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
              item.special
            }
            getItemValue={(item) => item.label}
            renderItem={(item, highlighted) => (
              <div
                key={`${item.id}_${highlighted}`}
                style={{
                  backgroundColor: highlighted ? PRIMARY_COLOR : 'transparent',
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
                'Suche nach "Asyl", "Münzen" oder "27. Februar 2007 (BGBl. I S. 221)"',
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
              zIndex: 1337,
            }}
          />
        </div>
        <div className="control">
          <button type="submit" className="button is-primary">
            <span className="icon is-small">
              <i className="fas fa-search" />
              <span className="is-sr-only">Suchen</span>
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBox;
