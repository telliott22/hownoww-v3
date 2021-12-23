export const numberWithCommas = (x: number) => x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const formatDate = (date: string) => {
  const splitDate = date.split('-');

  return splitDate.reverse().join('/');
};

export const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');
