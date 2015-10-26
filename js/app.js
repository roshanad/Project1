
$(document).ready(function() {
    $('#testQuestion').hide();
   $('#messagebox').hide();
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


    //display the questions and multiple choice list
    function questionDisplay() {
      $('#questionNum').text("Question " + (questionNum+1) + " of " + totalQuestion);
      $('#question').text(questions[questionNum].question);
      $('#choices').empty();
      var choiceTotal = questions[questionNum].choices.length;
      var answerChoices = questions[questionNum];
      console.log(choiceTotal);
      for (var i=0; i<choiceTotal; i++) {
      $('#choices').append("<input type='radio' class='guess' name='guess' value=" + i + "> " + answerChoices.choices[i] + "<br>");
      }
    }

    $("#submit").on('click', function(){
      console.log("Yay Submit Answer Button is clicked");
      var answer = $('input:radio[name=guess]:checked').val();
      var rightAnswer = questions[questionNum].correct;
      console.log(rightAnswer);
      if (answer == null){
        $('#messagebox').show();
        console.log("Writing in messagebox");
        $('#message').html("<p>Please Select an Answer.</p>");
      }
      else if (answer == rightAnswer)
      {
        $('#messagebox').show();
        $('#message').html("<p>YOU GOT IT!!! CONGRATS!!!</p>");
        correctAnswer++;
      }
      else {
        console.log("Opps got wrong answer");
        var getrightAnswer = questions[questionNum].choices[rightAnswer];
        $('#messagebox').show();
        $('#message').html("<p>The Correct Answer is: " + "<span class=black>" + getrightAnswer + "</span>" + "</p>");
        console.log(getrightAnswer);
      }
    });
});
