function pair(str) {
  var cur = str.split('');
  var final = [];
  for (var i = 0; i < cur.length; i++) {
    var n = [cur[i]];
    if (cur[i] === 'A') n.push('T');
    else if (cur[i] === 'T') n.push('A');
    else if (cur[i] === 'C') n.push('G');
    else n.push('C');
    
    final.push(n);
  }
 return final;
}

pair("GCG");
