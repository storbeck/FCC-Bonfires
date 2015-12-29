function pair(str) {
  var keys = {'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'};
  return str.split('').map(e => [e, keys[e]]);
}

pair("GCG");
