const dates = document.getElementsByClassName("date");

const days = document.getElementsByClassName("day");
const presentDate = new Date().getDate();
const today = new Date().getDay();

days[today].style.backgroundColor = "red";

for (const d of dates) {
  if (Number(d.id) === presentDate) {
    dates[presentDate + 1].style.backgroundColor = "red";
  }
}
