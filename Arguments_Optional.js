function add(x) {
  var a = Array.from(arguments);
  
  return (a.length === 1) 
    ?  (x + 0 === x) ? y => ((y + 0 === y) ? x + y : undefined) : undefined
    :  (a[1] + 0 === a[1]) ? x + a[1] : undefined
}

add(2)([3])
