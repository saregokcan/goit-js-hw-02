function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;

  if (totalPrice <= customerCredits) {
    console.log(`You ordered <quantity> droids worth <totalPrice> credits!`)
  } else {
    console.log(`Insufficient funds!`)
  }
}
