function permAlone(str) {
  var arr = str.split('');
  var results = [];
  var count = 0;
  
  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }
  
  var permutations = permute(str.split(''));
  for (var i = 0; i < permutations.length; i++) {
    var add = true;
    for (var x = 0; x < permutations[i].length; x++) {
      if (permutations[i][x] === permutations[i][x+1]) add = false;
    }
    if (add) count++;
  }
  
  return count;
}

permAlone('aab');
