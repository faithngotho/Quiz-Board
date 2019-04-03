
//user logic
$(document).ready(function() {
  $("#submit").click(function(event) {
    var score = 0;
    var selection = [];
    selection.push($("input:radio[name=questionOne]:checked").val());
    selection.push($("input:radio[name=questionTwo]:checked").val());
    selection.push($("input:radio[name=questionThree]:checked").val());
    selection.push($("input:radio[name=questionFour]:checked").val());

//Business logic
    if (selection[0] == "25") {
      score += 25;
    }
    if (selection[1] == "25") {
      score += 25;
    }
    if (selection[2] == "25") {
      score += 25;
    }
    if (selection[3] == "25") {
      score += 25;
    }
    $("#results").slideDown();
    $("#display").html("You scored " + score + "%");
  });
});

// Refresh button function
function refresh(){
  location.reload();
}
