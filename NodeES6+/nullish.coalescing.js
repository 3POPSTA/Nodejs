function calculatePrice(price, tax) {
  // Only uses default if tax is null or undefined
  return price + (tax ?? 0.1) * price;
}

console.log(calculatePrice(100, 0)); // 100 (correct! tax of 0 was used)
console.log(calculatePrice(100, null)); // 110 (using default)