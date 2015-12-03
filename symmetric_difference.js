function sym(args) {
  args = [].slice.call(arguments);
  
  function diff(a, b) {
    return a.filter(function(e) {
        return b.indexOf(e) < 0;
    });
  }
  
  var combined = args.shift();
  args.map(function(e) {
      combined = diff(combined, e).concat(diff(e, combined));
  });
  return combined;
}

sym([1, 2, 3], [5, 2, 1, 4]);
