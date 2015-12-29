function translate(str) {
  var pig = str.replace(/^([^aeiou]+)(.+)/, '$2$1ay');
  return (pig === str) ? pig + 'way' : pig;
}

translate("algorithm");
