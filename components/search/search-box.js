import React from 'react';
import ReactAutocomplete from 'react-autocomplete';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.q || '',
      suggestions: [],
      loading: false,
    };
  }

  _onSelect = value => {
    window.location.assign(`/suche?q=${value}`);
  };

  _onChange = async e => {
    const value = e.target.value;
    this.setState({ value });
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
    return (
      <form action="/suche" style={{ width: '100%' }}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <ReactAutocomplete
              items={this.state.suggestions.map(x => ({
                id: x,
                label: x,
              }))}
              shouldItemRender={(item, value) =>
                item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
              }
              getItemValue={item => item.label}
              renderItem={(item, highlighted) => (
                <div
                  key={`${item.id}_${highlighted}`}
                  style={{
                    backgroundColor: highlighted ? '#eee' : 'transparent',
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
                  'Suche in über 8000 Veröffentlichungen. Zum Beispiel "Asyl" oder "Münzen"',
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
