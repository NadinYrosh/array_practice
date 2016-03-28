$(document).ready(function() {
  $("form").submit(function(event) {
  var inputs = ["food", "animal", "music", "color", "season", "activity"];

// var nextInputs = inputs[1], inputs[0]
  var newArray = [];
    newArray.push(inputs[2], inputs[1], inputs[3]);

  newArray.forEach (function(input){
    var userInput = $("#" + input).val();
    $("ul#list").append("<li>" + userInput + "</li>");
    console.log(userInput);
  });


    // var newArray.push(inputs[2]);
  event.preventDefault();
  });
});
