function largestOfFour(arr) {
  // You can do this!
  
  return arr.map(function(obj) {
    return Math.max.apply(null, obj);
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

