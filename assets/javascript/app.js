var correct = 0;
var incorrect = 0

$(document).ready(function(){

	// starts when submit button is clicked
    $("#submit").click(function(){
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

        var correctAns = $('<p>');
        correctAns.append("Number of correct answers:  " + correct);
 

        var incorrectAns = $('<p>');
        incorrectAns.append("Number of incorrect answers:  " + incorrect);

        correctAns = correctAns.prepend(incorrectAns);

        $('#replace').append(correctAns);

        console.log(correct);
        console.log(incorrect);


    });
});