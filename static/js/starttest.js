var hour, minute, seconds;
window.onload = () => {
    let hour = 0;
    let minute = 0;
    let seconds = 0;
    let totalSeconds = 0;
    

    getNextQuestion();
  
    let intervalId = null;
  
  intervalId = setInterval(startTimer, 1000);
    function startTimer() {
      ++totalSeconds;
      hour = Math.floor(totalSeconds / 3600);
      minute = Math.floor((totalSeconds - hour * 3600) / 60);
      seconds = totalSeconds - (hour * 3600 + minute * 60);
  
      document.getElementById("hour").innerHTML = hour + ":";
      document.getElementById("minute").innerHTML = minute + ":";
      document.getElementById("seconds").innerHTML = seconds;
    }

    // document.getElementById('Displplaytimetaken').addEventListener('click', () => {
    //   document.getElementById("timetaken").innerHTML = minute + "minutes" + seconds + "seconds";
    //   reset();
    // });
  
    function reset() {
      totalSeconds = 0;
      document.getElementById("hour").innerHTML = '00';
      document.getElementById("minute").innerHTML = '00';
      document.getElementById("seconds").innerHTML = '00';
    }
}

var score = 0;
var rightAnswer = '';
var qcount = 1;

function trial() {
    if(document.getElementById(rightAnswer).checked) {
        score++;
    }
    qcount++;

    if(qcount == 10) {
        document.getElementById("submit-button").innerHTML = "Submit Test";
        // document.getElementById("submit-button").addEventListener('click', () => {
        //        document.getElementById("timetaken").innerHTML = minute + "minutes" + seconds + "seconds";
        // })
    }

    if(qcount == 11) {
        $('#main-container').children().remove();
        $('#main-container').append(`<div class="text-center" id="results"> </div>`);

        $('#results')
                     .append(`<h2 class="text-center"> Total Correct Answers : ${score} </h2>`)
                     .append(`<h2 class="text-center"> Total Questions : 10 </h2>`)
                     .append(`<a href="home"><button class="btn btn-primary btn-lg">Return to Home</button></a>`)
    }
    
    
    $('#choices').children().remove();
    getNextQuestion();
}

function getNext() {
    $("."+rightAnswer).css({"background-color": "#e6ffe6",
    "border-color" : "00b300", "border-width" : "1px", "border-style": "solid", "border-radius":"15px",
    "padding": "5px"

});
    setTimeout(function(){ trial(); }, 500);
}

function getNextQuestion(){ 
    $('#Qcount').html(qcount + " ");
    $('#score').html(score);
    $.ajax({
        url: 'https://opentdb.com/api.php?amount=10&category=9&type=multiple',
        type: "GET",
        success: function(result){
            console.log(result);
            var question= result.results[0].question;

            var answers= result.results[0].incorrect_answers;
            rightAnswer= result.results[0].correct_answer;

            console.log(question);
            console.log(answers);
            randomNumber= Math.floor((Math.random() * answers.length));
            answers.splice(randomNumber, 0, rightAnswer);

            console.log(answers);

            $(".question").html(question);

            $('#choices')
                .append(`<div class="text-left" id="opt"> </div>`)
            

            for (var value of answers) {
                $('#opt')
                  .append(`<input type="radio" class="${value}" id="${value}" name="choice" value="${value}">`)
                  .append(`<label class="${value}" for="${value}">${value}</label></span>`)
                  .append(`<br>`);
              }
        },
        error: function(error){
            console.log(error);
        }
    })
   
}











