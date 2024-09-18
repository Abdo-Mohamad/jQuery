/* $(document).ready(function () {
  $("h1").css("color", "red");
});
// when the document is ready, change the color of all h1 elements to red

$("h1").addClass("big-title");
// add the class "big-title" to all h1 elements

$("h1").removeClass("big-title");
// removing  the class "big-title" from all h1 elements

$("h1").addClass("big-title marging-50");
// Adding  multiple classes to all h1 elements

$("h1").text("Bye");
// Chaning  the text of all h1 elements to "Bye"

$("button").text("Don't click me");
// Chaning  the text of all button elements to "Don't click me"

$("img").attr("");
// adding an attribute to all img elements

$("a").attr("href", "http://www.yahoo.com").text("yahoo");
//  adding an attribute and chaning the text of all a elements

$("h1").click(function () {
  $("h1").css("color", "purple");
});
//  when the h1 element is clicked, change the color of all h1 elements to purple

for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", () => {
    document.querySelector("h1").style.color = "green";
  });
}
//   adding an event listener to all button elements, when clicked, change the color of the h1 to  green

$("button").click(() => {
  $("h1").css("color", "yellow");
});
//   when the button element is clicked, change the color of all h1 elements to yellow

$("input").keypress((event) => {
  //console.log(event.key);
  $("h1").text(event.key);
});
//   when a key is pressed in the input field, log the key to the console
//    and change the text of all h1 elements to the key pressed

$("h1").on("mouseover", () => {
  $("h1").css("color", "purple");
});
//   when the mouse is over the h1 element, change the color of all h1 elements to purple

$("h1").before("<button>New</button>");
//   adding a new button before the h1 element

$("h1").after("<button>new<button/>");
//   adding a new button after the h1 element
$("h1").prepend("<input>new</input>");
//   adding a new input field before the h1 element

$("h1").append("<button>new<button/>");
// adding  a new button after the h1 element

$("button").on("click", () => {
  $("h1").hide();
});
//    when the button element is clicked, hide all h1 elements
$("button").on("click", function () {
  $("h1").show();
});
//    when the button element is clicked, show all h1 elements

$("button").on("click", function () {
  $("h1").fadeIn();
});
//     when the button element is clicked, fade in all h1 elements

$("button").on("click", function () {
  $("h1").fadeOut();
});
//      when the button element is clicked, fade out all h1 elements

$("button").on("click", function () {
  $("h1").fadeToggel();
});
//        when the button element is clicked, toggle the fade of all h1 elements

$("h1").on("button", function () {
  $("h1").slideUp();
});
//        when the button element is clicked, slide up all h1 elements

$("h1").on("button", function () {
  $("h1").slideDown();
});
//          when the button element is clicked, slide down all h1 elements

$("button").on("click", function () {
  $("h1").animate({ opacity: 0.5 }, 2000); // animate the opacity of all h1 elements to 0.5 over 2 seconds
});
// when  the button element is clicked, animate the opacity of all h1 elements to 0.5 over */


$("button").on("click", function () {
  $("h1").slideDown().slideUp().animate({ opacity: 0.5 }, 2000); //  animate the opacity of all h1 elements to 0.5 over 2 seconds-
});
//  when the button element is clicked, animate the opacity of all h1 elements to 0.5 and slid  up and down over 2 seconds
