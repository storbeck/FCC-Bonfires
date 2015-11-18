function friendly(str) {
  var months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"],
  result = "";
  var fromDate = str[0].split("-"); //yyyy-mm-dd
  var toDate = str[1].split("-"); //yyyy-mm-dd
  var fromDay = fromDate[2],
      fromMonth = fromDate[1],
      fromYear = fromDate[0];
  var toDay = toDate[2],
      toMonth = toDate[1],
      toYear = toDate[0];
  var curYear = '2015';

  //convert day to 1st 2nd 3rd
  var tempFrom = parseInt(fromDay.toString().slice(-1), 10);
  var tempTo = parseInt(toDay.toString().slice(-1), 10);
  if (tempFrom === 1) { fromDay = fromDay + "st"; } 
  else if (tempFrom === 2) { fromDay = fromDay + "nd"; } 
  else if (tempFrom === 3) { fromDay = fromDay + "rd"; } 
  else { fromDay = fromDay + "th"; }
  
  if (tempTo === 1) { toDay = toDay + "st"; } 
  else if (tempTo === 2) { toDay = toDay + "nd"; } 
  else if (tempTo === 3) { toDay = toDay + "rd"; } 
  else { toDay = toDay + "th"; }
  
  fromDay = (fromDay[0] === '0') ? fromDay.substr(1) : fromDay;
  toDay = (toDay[0] === '0') ? toDay.substr(1) : toDay;
  

  // if days, and month, and year same
  if (fromDay === toDay && fromMonth === toMonth && fromYear === toYear) { 
    if (fromYear === curYear)
      return [months[fromMonth - 1] + " " + fromDay];
    else
      return [months[fromMonth - 1] + " " + fromDay + ", " + fromYear];
  // if month and year are the same
  } else if (fromMonth === toMonth && fromYear === toYear) {
    return [months[fromMonth - 1] + " " + fromDay, toDay];
  // if year is the same
  } else if (fromYear === toYear) {
    if (fromYear === curYear)
      return [months[fromMonth - 1] + " " + fromDay, months[toMonth - 1] + " " + toDay];
    else
      return [months[fromMonth - 1] + " " + fromDay, months[toMonth - 1] + " " + toDay + ", " + fromYear];
  // year can be inferred
  } else if (toYear - fromYear <= 1 && fromMonth > toMonth) {
    return [months[fromMonth - 1] + " " + fromDay, months[toMonth - 1] + " " + toDay];
  // normal date
  } else {
    return [months[fromMonth - 1] + " " + fromDay + ", " + fromYear,  months[toMonth - 1] + " " + toDay + ", " + toYear];
  }
}

friendly(['2015-07-01', '2015-07-04']);
