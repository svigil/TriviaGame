function check (){
    // alert("you win!");
    console.log(value);
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;

    var correct = 0;

        if (question1 == "Yes"){
            correct++;
        }
        if (question2 == "A Wizard"){
            correct++;
        }
        if (question3 == "A Mudblood"){
            correct++;
        }
        if (question4 == "Red"){
            correct++;
        }
        if (question5 == "A Scar"){
            correct++;
        }

    document.getElementById("afterSubmit").style.visibility = "visible";
    document.getElementById("numberCorrect").innerHTML ="You got " + correct + " correct.";
    console.log(correct);

}