import React from 'react';
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';

const YearRangeFacet = ({
  value,
  min,
  max,
  onChange,
  bars,
  containerStyle,
}) => (
  <div style={containerStyle}>
    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
      {bars.map(x => (
        <div
          style={{
            height: `${x.count}px`,
            backgroundColor:
              x.year >= value.min && x.year <= value.max
                ? '#3f51b5'
                : '#aaaaaa',
            width: 1,
            flexGrow: 1,
            transition: 'background-color 500ms linear',
          }}
        />
      ))}
    </div>
    <br />

    <InputRange
      maxValue={max}
      minValue={min}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default YearRangeFacet;
