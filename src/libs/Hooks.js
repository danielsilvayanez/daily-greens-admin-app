export function formatDate(date) {
  const newDate = `${date.slice(8, 10)}-${date.slice(5, 7)}-${date.slice(
    0,
    4
  )}`;
  return newDate;
}

export function createDateString(dayCount) {
  const dateObj = new Date(dayCount * 86400000 + +new Date());
  const dateString =
    dateObj.getFullYear() +
    "-" +
    ("0" + (dateObj.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + dateObj.getDate()).slice(-2);
  return dateString;
}
