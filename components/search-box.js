import React from 'react';
import ReactAutocomplete from 'react-autocomplete';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.q || '',
      suggestions: ['Mord', 'Stefan', 'Arne', 'Nadine'],
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
      `https://fds-proxy.app.vis.one/api/v1/request/search?q=${value}`
    );
    const json = await res.json();
    if (json.objects[0]) {
      this.setState({
        suggestions: json.objects[0].description.split(' '),
      });
    }
  };

  render() {
    return (
      <form action="/suche">
        <div className="field has-addons">
          <div className="control is-expanded">
            <ReactAutocomplete
              items={this.state.suggestions.map(x => ({ id: x, label: x }))}
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
              onChange={this._onChange}
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
