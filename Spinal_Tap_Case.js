function spinalCase(str) {
  var regex = /\s+|_+/g;

  return str.replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(regex, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');

