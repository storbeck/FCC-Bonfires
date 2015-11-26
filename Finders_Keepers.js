function find(arr, func) {
  return arr.filter(function(i) {
    return func(i);
  })[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });

