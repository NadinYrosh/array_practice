$(document).ready(function() {
  $("form").submit(function(event) {
  var inputs = ["food", "animal", "music", "color", "season", "activity"];

  var newArray = [];
    newArray.push(inputs[2], inputs[1], inputs[3]);
    $("ul").children().remove();
    newArray.forEach (function(input) {

  var userInput = $("#" + input).val();
    $("ul").append("<li>" + userInput + "</li>");
  });
  event.preventDefault();
  });
});
