function smallestCommons(arr) {
  arr.sort();
  var newArr = [];

  for (var j = arr[0]; j <= arr[1]; j++){
    newArr.push(j);
  }

  var a = Math.abs(newArr[0]);
  for (var i = 1; i < newArr.length; i++) {
    var b = Math.abs(newArr[i]),
      c = a;

    while (a && b) {
      a > b ? a %= b : b %= a;
    }
    a = Math.abs(c * newArr[i] / (a + b))
  }
  return a;
}
