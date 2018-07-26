import React from 'react';
import ReactAutocomplete from 'react-autocomplete';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.q || '',
    };
  }

  _onSelect = value => {
    window.location.assign(`/suche?q=${value}`);
  };

  render() {
    return (
      <form action="/suche">
        <div className="field has-addons">
          <div className="control is-expanded">
            <ReactAutocomplete
              items={[
                { id: 'foo', label: 'foo' },
                { id: 'bar', label: 'bar' },
                { id: 'baz', label: 'baz' },
              ]}
              shouldItemRender={(item, value) =>
                item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
              }
              getItemValue={item => item.label}
              renderItem={(item, highlighted) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: highlighted ? '#eee' : 'transparent',
                  }}
                >
                  {item.label}
                </div>
              )}
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
              onSelect={this._onSelect}
              inputProps={{
                name: 'q',
                className: 'input',
                type: 'text',
                placeholder: 'In Veröffentlichungen suchen. z.B. Mord',
              }}
              wrapperStyle={{ display: 'inline' }}
            />
          </div>
          <div className="control">
            <button type="submit" className="button is-primary">
              Suche
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBox;
