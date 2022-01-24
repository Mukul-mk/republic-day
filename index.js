
// Set the date we're counting down to
let  countDownDate = new Date("January 26, 2022 00:00:00").getTime();

// Update the count down every 01 second
var x = setInterval(function() {

  // Get todays date and time
let  now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = days + "<i> Days,</i> " + hours + " <i>Hrs,</i> "
  + minutes + "<i> Min,</i> " + seconds + "<i> Sec</i> ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer ").innerHTML = "🙏🙏🎉👮‍👮🎉🙏🙏";
  }
}, 1000);



let nm= prompt("Please Enter Your Name\n\n👇👇👇👇👇");
let b = document.querySelector('#name');
b.innerHTML=nm;

