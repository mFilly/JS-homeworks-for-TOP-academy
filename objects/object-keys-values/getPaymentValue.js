/**
 * @param {object} user
 * @param {object} [user.payment]
 * @param {object} [user.payment.details]
 * @param {number} [user.payment.details.value]
 */
const getPaymentValue = user => {
  console.log(user.payment?.details?.value ?? 0);
  return user.payment?.details?.value ?? 0;
}

// Sample usage - do not modify
getPaymentValue({ id: 1, name: "Alex" }); // undefined
getPaymentValue({ id: 2, name: "Sam", payment: { details: { value: 59 } } }); // 59