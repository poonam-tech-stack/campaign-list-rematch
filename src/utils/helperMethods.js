const ranges = [
  { divider: 1e12, suffix: 'T' },
  { divider: 1e9, suffix: 'B' },
  { divider: 1e6, suffix: 'M' },
  { divider: 1e3, suffix: 'k' },
];

export const formatNumberToUSD = (n) => {
  for (let i = 0; i < ranges.length; i++) {
    if (n >= ranges[i].divider) {
      return (n / ranges[i].divider).toString() + ranges[i].suffix;
    }
  }
  return n.toString();
};
