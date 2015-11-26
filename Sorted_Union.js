function unite(arr1, arr2, arr3) {
  
  var arr = Array.prototype.slice.call(arguments);
  
  arr = arr.reduce(function(a, b) {
    return a.concat(b);
  });
  
  return arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
  }).filter(function(n){ return n !== undefined; });
  
}
unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

