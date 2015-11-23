function chunk(arr, size) {
  var chunked = [];
  while(arr.length) {
    chunked.push(arr.splice(0, size));
  }
  return chunked;
}

chunk(["a", "b", "c", "d"], 2);
