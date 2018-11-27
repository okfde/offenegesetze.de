import React from 'react';
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';

import { PRIMARY_COLOR_DARK, MAX_YEAR, MIN_YEAR } from '../../misc/config';

const YearRangeFacet = ({
  value,
  min,
  max,
  onChange,
  onChangeComplete,
  facet,
  containerStyle,
}) => {
  const bars = facet.filter(x => x.year >= min && x.year <= max);
  const beforeBars = facet.filter(x => x.year < min);
  const afterBars = facet.filter(x => x.year > max);
  const maxValue = Math.max(
    ...[...bars, ...beforeBars, ...afterBars].map(x => x.count)
  );
  return (
    <div style={containerStyle}>
      <input type="hidden" name="year" value={`${min}-${max}`} />
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        {beforeBars.map(x => (
          <a
            key={x.year}
            title={`${x.year}: ${x.count}`}
            href={`/suche?year=${x.year}`}
            onClick={setYear(x.year)}
            style={{
              height: `${(x.count / maxValue) * 50}px`,
              backgroundColor:
                x.year > value.min ? PRIMARY_COLOR_DARK : '#aaaaaa',
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
                  ? PRIMARY_COLOR_DARK
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
        maxValue={Math.max(MAX_YEAR, max)}
        minValue={Math.min(MIN_YEAR, min)}
        value={value}
        onChange={onChange}
        onChangeComplete={onChangeComplete}
        allowSameValues
      />
    </div>
  );
};

export default YearRangeFacet;
