function where(arr, num) {

  var result = arr.map(function(c, i) {
    if (num <= c) return i;
  }).filter(function(n){ return n != undefined })[0];
  return typeof result !== 'undefined' ? result : arr.length;

}

where([2, 5, 10], 15);
