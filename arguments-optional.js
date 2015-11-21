function add(x) {
  var args = Array.prototype.slice.call(arguments, 0);

  if (typeof x === 'number') {
    if (args.length === 2) {
      if (typeof args[1] === 'number') return args[0] + args[1];
    } else {
      return function(y) {
        if (typeof y === 'number') return x + y;
      };

    }
  }
}

add(2,3);
