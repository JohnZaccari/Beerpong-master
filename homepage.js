//


var deadline = new Date("Nov 24, 2019 21:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  // document.getElementById("demo").innerHTML = days + "Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds ";
  document.getElementById("dayDisplay").innerHTML = days;
  document.getElementById("hourDisplay").innerHTML = hours;
  document.getElementById("minuteDisplay").innerHTML = minutes;
  document.getElementById("secondDisplay").innerHTML = seconds;
  if (t < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);


///////////////////////////////////////////
/*
Add if statement that will print out that the Tournament is happening that days
*/


//
