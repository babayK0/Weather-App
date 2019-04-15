class DateConvertor{
  convertTime(UNIX_timestamp,day) {
    let dt = new Date(UNIX_timestamp * 1000);
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayOfWeek = daysOfWeek[dt.getDay()];
    let year = dt.getFullYear();
    let month = (`0${dt.getMonth()+1}`).slice(-2);
    let date = (`0${dt.getDate()}`).slice(-2);
    let time = `${date}.${month}.${year}`;
    if(day===true) return dayOfWeek;
    else return time;
  }

  shortenedDayOfWeek(dt_txt) {
    let day = dt_txt;
    let date = new Date(day);
    let dateArray = date.toString().split(' ');
    let dayOfWeek = dateArray[0];
    return dayOfWeek;
  }
}

export default new DateConvertor();
