function convert(num) {
    var R = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    if (num < 1) return '';
    for (var k in R) if (num >= R[k]) return k + convert(num -= R[k]);
}

convert(44);
