//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const numberString = String(number);
  const numberOfDigits = numberString.length;
  let sumTotal = 0;
  for (let i = 0; i < numberOfDigits; i++) {
    sumTotal += Math.pow(Number(numberString.substr(i, 1)), numberOfDigits);
  }
  return sumTotal === number;
};
