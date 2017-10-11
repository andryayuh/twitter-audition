module.exports.getDate = (dateStr) => {
  let date = new Date(dateStr);
  let min = date.getMinutes().toString().length < 2 ? '0' + date.getMinutes().toString() : date.getMinutes().toString();
  let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  let period = date.getHours() > 12 ? 'PM' : 'AM';
  let time = hour + ':' + min + ' ' + period;
  let dmmyyyy = date.getDate() + ' ' + date.toString().slice(4, 7) + ' ' + date.getFullYear();
  return time + date;
};

