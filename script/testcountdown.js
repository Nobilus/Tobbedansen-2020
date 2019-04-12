var counter = 0;
var deathline = new Date('2019-08-31T12:00:00');
var currentDate = new Date();

var seconds = currentDate.getSeconds();
var minutes = currentDate.getMinutes();
var hours = currentDate.getHours();
var day = currentDate.getDate();

var secondsDl = deathline.getSeconds();
var minutesDl = deathline.getMinutes();
var hoursDl = deathline.getHours();
var dayDl = deathline.getDate();


function setup() {
  noCanvas();

  var timer = select('#timer');
  timer.html(counter);

  function timeIt() {
    counter++;
    timer.html(counter);
  }

  setInterval(timeIt, 1000);
}
