//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (year, month, descriptor, dayOfWeek) => {
  if (descriptor === 'teenth') {
    return findDate(year, month, dayOfWeek, 13);

  } else if (descriptor === 'first') {
    return findDate(year, month, dayOfWeek, 1);

  } else if (descriptor === 'second') {
    return findDate(year, month, dayOfWeek, 1 + DAYS_OF_WEEK.length);

  } else if (descriptor === 'third') {
    return findDate(year, month, dayOfWeek, 1 + DAYS_OF_WEEK.length * 2);

  } else if (descriptor === 'fourth') {
    return findDate(year, month, dayOfWeek, 1 + DAYS_OF_WEEK.length * 3);

  } else if (descriptor === 'last') {
    return findDate(year, month + 1, dayOfWeek, 1 - DAYS_OF_WEEK.length);
  }
  return null;
};

const findDate = function (year, month, dayOfWeek, startDay) {
  for (let i = startDay; i <= startDay + DAYS_OF_WEEK.length; i++) {
    const date = new Date(year, month - 1, i);
    if (DAYS_OF_WEEK[date.getDay()] === dayOfWeek) {
      return date;
    }
  }
};

const DAYS_OF_WEEK = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];