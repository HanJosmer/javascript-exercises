const ftoc = function(temp) {
  temp = (temp - 32) / 1.8;
  return +temp.toFixed(1);
}

const ctof = function(temp) {
  temp = (temp * 1.8) + 32
  return +temp.toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
