function steamroller(arr) {
  
  function flatten(arr, flat){
    if (!flat) flat = [];
    
    arr.map(function(e) {
      if (e.constructor == Array) flatten(e, flat);
      else flat.push(e);
    });
    return flat;
  }
  
  return flatten(arr);
}

steamroller([1, [2], [3, [[4]]]]);

