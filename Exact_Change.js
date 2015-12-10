function drawer(price, cash, cid) {
  var types = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];
  var counts = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

  var change = [];
  var diff = cash - price;
  var nsf = false,
      closed = true
      total = 0;

  // Check for insufficient funds
  for (var i = 0; i < cid.length; i++) {
      var index = types.indexOf(cid[i][0]);
      total = total + (counts[index] * cid[i][1]);
  }

  if (total < diff) {
      return 'Insufficient Funds';
  }

  // While we still have money keep taking money out of CID
  while(diff > 0) {

      // Return Insufficient funds if we suddently don't have enough
      if (nsf) {
          return 'Insufficient Funds';
      }
      // Loop over counts
      for (var count = 0; count < counts.length; count++) {
          var index;
          for (var x = 0; x < cid.length; x++) {
              if (cid[x][0] === types[count]) {
                  index = x;
              }
          }
          if (diff >= counts[count] && cid[index][1] > 0) {
              var exists = false;
              for (var i = 0; i < change.length; i++) {
                  if (change[i][0] === types[count]) {
                      console.log(change[i][0])
                      exists = true;
                      change[i][1] += counts[count];
                  }
              }
              if (!exists) {
                  change.push([types[count], counts[count]]);
              }
              cid[index][1] -= counts[count];
              diff -= counts[count];
              break;
          }
      }
  }

  var newTotal = 0;
  for (var i = 0; i < cid.length; i++) {
      newTotal += cid[i][1];
  }

  if (newTotal === 0) {
      return 'Closed';
  } else {
      console.log(change);
    return change;
  }
}
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

drawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
// should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]
