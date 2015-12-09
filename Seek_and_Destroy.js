function destroyer(arr) {
  // Remove all the values
  var args = [].slice.call(arguments);
  args.shift();
  
  return arr.filter(function(e) {
    return (args.indexOf(e) < 0);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

