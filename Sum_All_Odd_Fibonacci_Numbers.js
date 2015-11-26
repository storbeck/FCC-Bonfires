function sumFibs(num) {
  var odds = [];
  for(i=0,j=1,k=0; i+j<=num;i=j,j=x,k++ ){
    x=i+j;
    console.log(x);
    if (x % 2 !== 0) odds.push(x);
  }
  
  return odds.reduce(function(a,b) {
    return a+b;
  }) + 1;
}

sumFibs(4);
