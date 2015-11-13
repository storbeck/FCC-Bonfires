function palindrome(str) {

  arr = str.toLowerCase()
           .replace(/[^a-z0-9]+/g, '')
           .split('');
  
  var rev = arr.slice();
  rev.reverse();
  
  return rev.every(function(e, i){
    return (e === arr[i]);
  });
  
}

palindrome("not a palindrome");

