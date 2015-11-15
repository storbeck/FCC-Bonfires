function mutation(arr) {

  return arr[1].toLowerCase().split('').every(function(e) {
    return (arr[0].toLowerCase().indexOf(e) >= 0);
  });

}

mutation(["hello", "neo"]);
