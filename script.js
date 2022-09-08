let dayRef = document.getElementById("day");
let DaysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dateToday = new Date();
let dayToday = dateToday.getDay();
dayRef.innerHTML = `Today is <span>${DaysOfWeek[dayToday]}</span>`;

let container = document.querySelector(".container");
let timeNow = new Date().getHours();
let greeting =
  timeNow >= 00 && timeNow < 12
    ? "Good Morning"
    : timeNow >= 12 && timeNow < 16
    ? "Good Afternoon"
    : "Good evening";
container.innerHTML = `<h1>${greeting}</h1>`;