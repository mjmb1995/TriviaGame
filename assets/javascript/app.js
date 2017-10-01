var correct = 0;
var incorrect = 0

// game lasts 30 seconds
var count= 30;

var counter = setInterval(timer, 1000); //1000 will  run it every 1 second


//answer checker
function result() {
	//stop counter
	clearInterval(counter);

		// question 1 checker
    if ($('input[name=question1]:checked').val() === "las") {
    	correct++;
    } 
    else {
    	incorrect++
    }

    // question 2 checker
    if ($('input[name=question2]:checked').val() === "southWest") {
    	correct++;
    } 
    else {
    	incorrect++
    }

    // question 3 checker
    if ($('input[name=question2]:checked').val() === "unitedAirlines") {
    	correct++;
    } 
    else {
    	incorrect++
    }

    // question 4 checker
    if ($('input[name=question2]:checked').val() === "alaskaAirlines") {
    	correct++;
    } 
    else {
    	incorrect++
    }

     // question 5 checker
    if ($('input[name=question2]:checked').val() === "125k") {
    	correct++;
    } 
    else {
    	incorrect++
    }

    //clear the timer and questions
    $('#replace').empty();

    //creating p tag correct answers
    var correctAns = $('<p>');
    correctAns.append("Number of correct answers:  " + correct);

    // creating p tag for incorrect answers
    var incorrectAns = $('<p>');
    incorrectAns.append("Number of incorrect answers:  " + incorrect);

    correctAns = correctAns.append(incorrectAns)

    $('#replace').append(correctAns);
}


// countdown function
function timer()
{
  count=count-1;
  if (count <= 0)
  {
  	//when counter ends run result
    result();
  }
  	// shows the timer on the html
	document.getElementById("timer").innerHTML="Time left: " + count + " secs"; // watch for spelling
}

// game can end early by clicking on the submit button
$("#submit").click(function(){
	//when submit button is clicked run result
	result();
});
