function convert(num) {
  var symbols = ['I','V','X'];
  var temp = [];
  var answer = [];
  
  while (num > 0) {
    if (num >= 10) {
      temp.push('X');
      num -= 10;
    } else if (num >= 5) {
      temp.push('V');
      num -= 5;
    } else {
      temp.push('I');
      num -= 1;
    }
  }
 
  for (var i = 0; i < temp.length; i++) {
    if (temp[i] === temp[i+1] && temp[i] === temp[i+2] && temp[i] === temp[i+3]) {
      var prevSymbol = symbols.indexOf(temp[i-1]);
      
      answer[answer.length-1] = symbols[prevSymbol+1]; // Replace previous symbol to be higher
      answer.splice(answer.length-1, 0, temp[i]); // Insert symbol before last (VIII => IX)
      
      i += 3; // Skip next 3
    } else {
      answer.push(temp[i]);
    }
  }
 return answer.join('');
}

convert(36);
