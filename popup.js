function awesome() {
  // Do something awesome!
  $('.chart').easyPieChart({
    //your options goes here
  });
}

function totallyAwesome() {
  // do something TOTALLY awesome!
}

function awesomeTask() {
  awesome();
  totallyAwesome();
}

function clickHandler(e) {
  setTimeout(awesomeTask, 1000);
}

function main() {
  // $('.chart').easyPieChart({
  //   //your options goes here
  // });
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('button').addEventListener('click', clickHandler);
//   main();
// });

$(function() {
  $('button').click(clickHandler);
});