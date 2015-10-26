
$(document).ready(function() {
    $('#testQuestion').hide();
    // $('#messagebox').hide();
    var questions = [
      { question: 'What does HTML stand for?',
      choices: ['Hyperlinks and Text Markup Language','Hyper Text Markup Language', 'Home Tool Markup Language'],
      correct: 1
    },
    {
      question: 'Question Number 2?',
      choices: ['Hyperlinks and Text Markup Language','Hyper Text Markup Language', 'Home Tool Markup Language'],
      correct: 2},
    ]
    var questionNum = 0;
    var totalQuestion = questions.length;
    var correctAnswer = 0;
    $('#testQuestion').hide();
    // Start quiz and show the first question
    // hide startQuiz text and show questions
    $('#startQuizButton').on('click', function(){
      console.log("Start Key Button clicked");
      $('#startQuiz').hide();
      $('#testQuestion').show();
      questionDisplay();
    });

    //display the questions
    function questionDisplay() {
      $('#questionNum').text("Question " + (questionNum+1) + " of " + totalQuestion);
      $('#question').text(questions[questionNum].question);
      $('#choices').empty();
      var choiceTotal = questions[questionNum].choices.length;
      for (var i=0; i<choiceTotal; i++) {                  //displays the answer choices
      $('#choices').append("<input type='radio' class='guess' name='guess' value=" + i + ">" + questions[questionNum].choices[i] + "<br>");
      }
    }
});
