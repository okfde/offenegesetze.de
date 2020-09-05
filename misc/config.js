const MIN_YEAR = 1949;
const MAX_YEAR = new Date().getFullYear();

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

const CURRENT_YEAR = new Date().getFullYear();

const KIND_LIST = [
  {
    name: 'BGBl. Teil I',
    size: '~6 GB',
    id: 'bgbl1',
    years: range(1949, CURRENT_YEAR + 1, 1),
  },
  {
    name: 'BGBl. Teil II',
    size: '~4 GB',
    id: 'bgbl2',
    years: range(1951, CURRENT_YEAR + 1, 1),
  },
];
const KINDS = {};
KIND_LIST.forEach((x) => {
  KINDS[x.id] = x;
});

const PRIMARY_COLOR = '#00d1b2';
const PRIMARY_COLOR_DARK = '#1ba0ab';

export {
  MIN_YEAR,
  MAX_YEAR,
  KIND_LIST,
  KINDS,
  PRIMARY_COLOR,
  PRIMARY_COLOR_DARK,
  CURRENT_YEAR,
};
