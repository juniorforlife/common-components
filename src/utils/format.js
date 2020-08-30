const formatNumber = (number, separator = ' ') => {
  if (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  }
  return 0;
};

const formatCurrency = (number) => {
  const num = Number(number);
  return `S$ ${num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
};

const formatNumberWithLeadingZero = (number, numberOfDigit) => {
  if (number) {
    let result = `${number}`;
    while (result.length < numberOfDigit) {
      result = `0${result}`;
    }
    return result;
  }
  return 0;
};

const formatFormDataImage = (uri, propertyName = 'file') => ({
  [propertyName]: {
    uri,
    type: 'image/jpeg',
    name: 'attachment.jpg',
  },
});

export {
  formatNumber,
  formatNumberWithLeadingZero,
  formatFormDataImage,
  formatCurrency,
};
