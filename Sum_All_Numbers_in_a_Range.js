function sumAll(arr) {
  var a = [];
  
  arr.sort(function(a, b) {
    return a - b;
  });
  
  while (arr[0] <= arr[1]) {
    a.push(arr[0]++);
  }
  
  return a.reduce(function(c,i) {
    return c+i;
  });
}

sumAll([1, 4]);

