import moment from 'moment';

export const sortArray = (arr, key) => {
  return arr
    .map((data) => ({
      ...data,
    }))
    .sort((a, b) => {
      const x = moment(a[key]).format('MMM Do');
      const y = moment(b[key]).format('MMM Do');
      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    });
};
