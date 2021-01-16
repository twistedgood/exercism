//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (phoneNumber) => {

  // phoneNumber.match(/\+?(\d)?.*?(\d){3}.*?(\d){3}.*?(\d){4}/);

  if (phoneNumber.match(/[a-zA-Z]/)) {
    throw new Error('Letters not permitted');
  } else if (phoneNumber.match(/[,/#!$%^&*;:{}=_`~]/)) {
    throw new Error('Punctuations not permitted');
  }

  let cleaned = phoneNumber.toString().replace(/[^\d]/g, '');

  if (cleaned.length === 9) {
    throw new Error('Incorrect number of digits');
  } else if (cleaned.length > 11) {
    throw new Error('More than 11 digits');
  } else if (cleaned.length === 11) {
    if (!cleaned.startsWith('1')) {
      throw new Error('11 digits must start with 1');
    } else {
      cleaned = cleaned.substring(1);
    }
  }

  const areaCode = cleaned.substring(0, 3);
  if (areaCode.startsWith('0')) {
    throw new Error('Area code cannot start with zero');
  }
  if (areaCode.startsWith('1')) {
    throw new Error('Area code cannot start with one');
  }

  const exchangeCode = cleaned.substring(3, 6);
  if (exchangeCode.startsWith('0')) {
    throw new Error('Exchange code cannot start with zero');
  }
  if (exchangeCode.startsWith('1')) {
    throw new Error('Exchange code cannot start with one');
  }

  return cleaned;
};