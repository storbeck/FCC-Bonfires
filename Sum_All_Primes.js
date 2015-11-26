function sumPrimes(num) {
  if (num === undefined) return 1;
  
  var primes = [];
  
  function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
  }
  
  for (var i = 0; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  
  return primes.reduce(function(a,b) {
    return a+b;
  });
  
}

sumPrimes(977);

