function convert(str) {
  // &colon;&rpar;
  var entities = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    '\'': '&apos;'
  };
  
  return str.split('').map(function(i) {
    return (i in entities) ? entities[i] : i;
  }).join('');

}

convert("Dolce & Gabbana");

