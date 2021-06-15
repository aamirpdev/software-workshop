/* eslint-disable no-param-reassign */
export default installments => {
  const bookingsMap = {};
  return installments.map(installment => {
    if (bookingsMap[installment.booking]) {
      installment.canPay = false;
      if (!installment.transaction) {
        bookingsMap[installment.booking].push(installment.key);
      }
    } else {
      installment.canPay = true;
      if (!installment.transaction) {
        bookingsMap[installment.booking] = [installment.key];
      }
    }
    return installment;
  });
};
