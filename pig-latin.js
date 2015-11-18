function translate(str) {
  var words = str.split('');
  var vowels = ['a','e','i','o','u'];

  // append way
  if (vowels.indexOf(words[0]) >= 0) {
    return str + 'way';
  } else {
    var final = [];
    for (var i = 0; i < words.length; i++) {
      // found vowel, stop moving around
      if (vowels.indexOf(words[i]) >= 0) {
        var word = words.join('').substr(i, words.length) + final.join('');
        return word + 'ay';
      } else {
        final.push(words[i]);
      }
    }
  }
 return str;
}

translate("consonant");
