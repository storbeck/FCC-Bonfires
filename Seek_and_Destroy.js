function destroyer(arr) {
  var args = [].slice.call(arguments).splice(1);
  return arr.filter(e => args.indexOf(e) === -1);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
