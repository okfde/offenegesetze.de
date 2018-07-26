import React from 'react';
import ReactAutocomplete from 'react-autocomplete';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
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
            onSelect={value => this.setState({ value })}
            inputProps={{
              className: 'input',
              type: 'text',
              placeholder: 'In Veröffentlichungen suchen. z.B. Mord',
            }}
            wrapperStyle={{ display: 'inline' }}
          />
        </div>
        <div className="control">
          <a className="button is-info">Suchen</a>
        </div>
      </div>
    );
  }
}

export default SearchBox;
