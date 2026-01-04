const convertToCelsius = function(F) {
  const C = (F - 32) / 1.8
  return Number(C.toFixed(1))
};

const convertToFahrenheit = function(C) {
  const F = 1.8 * C + 32;
  return Number(F.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
