import "./java_learn_home_1.scss";

// $("body").append("<p>Это новый параграф</p>");

// for (var i = 0; i < 3; i++) {
//   var hobby = prompt("Назови одно из своих хобби!");
//   $("body").append("<p>" + hobby + "</p>");
// }

// $("h1").text("Этот текст скоро исчезнет");

// $("h1")
//   .fadeOut(3000)
//   .fadeIn(2000);

// var leftOffset = 0;
// var moveHeading = function() {
//   $("#heading").offset({ left: leftOffset });
//   leftOffset++;
//   if (leftOffset > 200) {
//     leftOffset = 0;
//   }
// };
// setInterval(moveHeading, 30);
// var clickHandler = function(event) {
//   console.log("Клик! " + event.pageX + " " + event.pageY);
// };
// $("h1").click(clickHandler);
$("html").mousemove(function(event) {
  $("#heading").offset({
    left: event.pageX,
    top: event.pageY
  });
});
