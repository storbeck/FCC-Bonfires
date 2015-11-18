function replace(str, before, after) {

  if (before[0] === before[0].toUpperCase()) {
    var after_a = after.split('');
    after_a[0] = after_a[0].toUpperCase();
    after = after_a.join('');
  }
  
  return str.replace(before, after);
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
