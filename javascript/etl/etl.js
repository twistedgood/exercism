//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  const transformed = {};
  Object.entries(old).forEach(([point, letters]) => {
    Object.assign(transformed, Object.fromEntries(letters.map(letter => [letter.toLowerCase(), Number(point)])));
  });
  return transformed;
};