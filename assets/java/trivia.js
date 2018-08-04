function check (){
    // alert("you win!");
    // console.log(value);
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



    var messages = ["100 points for Griffindor!", "Meh", "You're expelled from Hogwarts" ];
    var pictures = ["assets/images/wizardharry.gif", "assets/images/herm.gif", "assets/images/vold.gif" ];
    var range = 0;

    if (correct < 1 ){
        range = 2;
    }
    if (correct > 0 && correct < 4 ){
        range = 1;
    }
    if (correct > 3 ){
        range = 0;
    }
    
    
    // console.log(range);

    console.log(messages[range]);

    document.getElementById("afterSubmit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[range];

    document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct.";

    document.getElementById("picture").src = pictures[range];;

   
    // console.log(correct);
    // console.log(range);
    

}