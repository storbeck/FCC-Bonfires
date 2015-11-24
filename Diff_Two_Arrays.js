function diff(arr1, arr2) {

  var a1 = arr1.filter(function(i) { return arr2.indexOf(i) < 0;});
  var a2 = arr2.filter(function(i) { return arr1.indexOf(i) < 0;});
  
  return a1.concat(a2);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

