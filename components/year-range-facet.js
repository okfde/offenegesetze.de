import React from 'react';
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';

import { PRIMARY_COLOR, MAX_YEAR, MIN_YEAR } from '../misc/config';

const YearRangeFacet = ({
  value,
  min,
  max,
  onChange,
  onChangeComplete,
  beforeBars,
  afterBars,
  bars,
  containerStyle,
}) => {
  const maxValue = Math.max(
    ...[...bars, ...beforeBars, ...afterBars].map(x => x.count)
  );
  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        {beforeBars.map(x => (
          <div
            key={x.year}
            title={`${x.year}: ${x.count}`}
            style={{
              height: `${(x.count / maxValue) * 50}px`,
              backgroundColor: '#aaaaaa',
              width: 1,
              flexGrow: 1,
              transition: 'background-color 500ms linear',
            }}
          />
        ))}
        {bars.map(x => (
          <div
            key={x.year}
            title={`${x.year}: ${x.count}`}
            style={{
              height: `${(x.count / maxValue) * 50}px`,
              backgroundColor:
                x.year >= value.min && x.year <= value.max
                  ? PRIMARY_COLOR
                  : '#aaaaaa',
              width: 1,
              flexGrow: 1,
              transition: 'background-color 500ms linear',
            }}
          />
        ))}
        {afterBars.map(x => (
          <div
            key={x.year}
            title={`${x.year}: ${x.count}`}
            style={{
              height: `${(x.count / maxValue) * 50}px`,
              backgroundColor: '#aaaaaa',
              width: 1,
              flexGrow: 1,
              transition: 'background-color 500ms linear',
            }}
          />
        ))}
      </div>

      <br />

      <InputRange
        maxValue={Math.max(MAX_YEAR, parseInt(max))}
        minValue={Math.min(MIN_YEAR, parseInt(min))}
        value={value}
        onChange={onChange}
        onChangeComplete={onChangeComplete}
        allowSameValues
      />
    </div>
  );
};

YearRangeFacet.defaultProps = {
  beforeBars: [],
  afterBars: [],
};

export default YearRangeFacet;
