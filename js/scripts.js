<<<<<<< HEAD
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
=======
function check() {
    var questionOne = document.Quiz.questionOne.value;
    var questionTwo = document.Quiz.questionTwo.value;
    var questionThree = document.Quiz.questionThree.value;
    var questionFour = document.Quiz.questionFour.value
    var right = 0;


    if (questionOne == "correct") {
        right = right + 25;
    };
    if (questionTwo == "correct") {
        right = right + 25;
    };
    if (questionThree == "correct") {
        right = right + 25;
    };
    if (questionFour == "correct") {
        right = right + 25;

    document.getElementById("fifth-p").style.visibility = "visible";
    document.getElementById("correctNumber").innerHTML = "HERE IS YOUR SCORE: " + right + "%";
    $(".container").fadeOut();

};
>>>>>>> c60be27e41103c856a34c57933bd0bd184f5eb44
