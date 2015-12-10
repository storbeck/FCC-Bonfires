function palindrome(str) {
  arr = str.toLowerCase().replace(/[^a-z0-9]+/g, '').split('');
  
  return arr.slice().reverse().every(function(e, i){
    return (e === arr[i]);
  });
  
}

palindrome("not a palindrome");

