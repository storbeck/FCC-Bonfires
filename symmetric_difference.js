function sym(arr) {
  arr = Array.prototype.slice.call(arguments);
  var o = {};
  for (var i = 0; i < arr.length; i++) {
      arr[i].map(function(e) { 
        if (o.hasOwnProperty(e)) { 
          o[e] = o[e] + ',' + i; 
        } else { 
          o[e] = i; 
        } 
      }); 
  } 
  
  var final = []; 
  for (var k in o) { 
    if(typeof o[k] === 'number') { 
      final.push(parseInt(k,10)); 
    } else { 
      var r = o[k].split(','); 
      var unique = 1; 
      var last = r[0]; 
      for (var x = 1; x < r.length; x++) { 
        if (last !== r[x]) { 
          unique++; 
        } 
        last = r[x]; 
      } 
      if (unique % 2 !== 0) 
        final.push(parseInt(k, 10)); 
    } 
  } return final; 
} 

sym([1, 2, 3], [5, 2, 1, 4]);
