// You'll want to get in the habit of wrapping your code in some kind of
// function block - this prevents variables from being leaked onto the global
// scope which can prevent bugs from naming collisions with other code.

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
    // gotta make sure you're checking the correct question number 😬
    if ($('input[name=question3]:checked').val() === "unitedAirlines") {
    	correct++;
    } 
    else {
    	incorrect++
    }

    // question 4 checker
    if ($('input[name=question4]:checked').val() === "alaskaAirlines") {
    	correct++;
    } 
    else {
    	incorrect++
    }

     // question 5 checker
    if ($('input[name=question5]:checked').val() === "125k") {
    	correct++;
    } 
    else {
    	incorrect++
    }

    // your results checking logic is fairly repetitive so I'd suggest making the logic more
    // dynamic. This can be achieved by putting each of the answers into an array and then 
    // looping over that array to check and see if the correct answer was checked for that
    // question. You can determine the question number based on the index of the answer in
    // the array. Would look something like this: 

    // var answers = ['las', 'southWest', 'unitedAirlines', 'alaskaAirlines', '125k']

    // answers.forEach(function(answer, index) {
    //     if ($('input[name=question' + index + ']:checked').val() === answer) {
    //         correct++;
    //     } 
    //     else {
    //         incorrect++
    //     }
    // })

    //clear the timer and questions
    $('#replace').empty();

    //creating p tag correct answers
    var correctAns = $('<p>');
    correctAns.append("Number of correct answers:  " + correct);

    // creating p tag for incorrect answers
    var incorrectAns = $('<p>');
    incorrectAns.append("Number of incorrect answers:  " + incorrect);

    // You haven't defined a variable `restart` anywhere in your code so it was breaking
    // at this next line 😮
    correctAns = correctAns.append(incorrectAns)//.append(restart)

    $('#replace').append(correctAns);
}

// reset the web page
function reset() {
	location.reload();
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
