//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
  return colors.slice(0, 2).reverse().reduce((accumulator, color, index) => {
    return accumulator + colorCode(color) * Math.pow(10, index);
  }, 0);
};

export const colorCode = param => COLORS.indexOf(param);

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
