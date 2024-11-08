//this constant will act as the "answer key" and contain answers to all the questions
const answerKey = {

    practice_one: {
        question_one: "B",
        question_two: "C",
        question_three: "D",
        question_four: "C",
        question_five: "A",
        question_six: "C",
        question_seven: "D",
        question_eight: "B",
        question_nine: "D",
        question_ten: "B"
    }
    ,
    practice_seven: {
        question_one: "B",
        question_two: "D",
        question_three: "B",
        question_four: "C",
        question_five: "A",
        question_six: "C",
        question_seven: "A",
        question_eight: "C",
        question_nine: "B",
        question_ten: "C",
        question_eleven: "D"
    }


}

function checkAnswers(practice){  //practice should be a string ('practice_one', 'practice_two' etc.)
    const answers = answerKey[practice]
    let score = 0
    let totalQuestions = 0
    let wrongQuestions = []
    let wrongString = "You got question(s) "

    //this loops through the answers constant and checks if the user input matches the key
    for(let id in answers){
        totalQuestions++
        let cur = document.querySelector(`input[name="${id}"]:checked`); //this gives the element whos ID matches the current question being checked in the list
        //it is very important to make sure that the question ids remain constant throughout lessons so this function can work globally
        if(cur != null && cur.value === answers[id]){
            score++;
        }
        else{
            wrongQuestions.push(id)
        }

    }
    if(practice == "practice_seven") {
        totalQuestions = 10
    }

    //this is to remove the "question_" from all the questions in the list of questions the user got wrong
    for(let i in answers){
        i = i.substring(9)
        wrongString += (i.toString() + ", ")
    }
    wrongString = wrongString.substring(0, wrongString.length-2)
    wrongString += " wrong. Try again!"
    console.log(wrongString)

    //setting the html elements to display the score
    document.getElementById("question_score").innerText = `Your Score: ${score}/${totalQuestions}`;
    document.getElementById("question_score").classList.remove("hidden");


}  