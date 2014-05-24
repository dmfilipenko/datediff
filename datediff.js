function datediff(fromDate, toDate) {
  if (!fromDate) throw new Error('Date should be specified');
  var startDate = new Date(1970, 0, 1, 0).getTime(),
      now = new Date(),
      toDate = toDate && toDate instanceof Date ? toDate : now,
      diff = fromDate - toDate,
      date = new Date(startDate + diff),
      years = date.getFullYear() - 1970,
      months = date.getMonth(),
      days = date.getDate() - 1,
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds(),
      diffDate = {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };

  if (years < 0) return diffDate;
  if (years > 0) {
    diffDate.years = years;
  }
  if (months > 0) {
    diffDate.months = months;
  }
  if (days > 0) {
    diffDate.days = days;
  }
  if (hours > 0) {
    diffDate.hours = hours;
  }
  if (minutes > 0) {
    diffDate.minutes = minutes;
  }
  if (seconds > 0) {
    diffDate.seconds = seconds;
  }
  return diffDate;
}