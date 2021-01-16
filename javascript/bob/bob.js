//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const trimmed = message.toString().replace(/\s/g, '');

  if (trimmed.length === 0) {
    return 'Fine. Be that way!';
  }

  const asking = trimmed.match(/\?$/);
  const shouting = trimmed.match(/[A-Z]/) && !trimmed.match(/[a-z]/);

  if (asking && shouting) {
    return 'Calm down, I know what I\'m doing!';
  
  } else if (asking) {
    return 'Sure.';
  
  } else if (shouting) {
    return 'Whoa, chill out!';
  }
  
  return 'Whatever.';
};