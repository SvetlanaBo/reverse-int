module.exports = function reverse (n) {
  var digit, result = 0;

    while (n) {
      digit = Math.abs(n) % 10;                
      result = (result * 10) + digit; 
      n = Math.trunc(n/10);                    
  }
    return result;
}
