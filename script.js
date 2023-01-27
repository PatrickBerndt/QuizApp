let currentQuestion = 0
let rightAnswers = 0
let TADAA = new Audio('sounds/tadaa.mp3')

function init(){
    addQuestion();
}

function addQuestion(){
    i = currentQuestion;    
    const question = questions[i];
    document.getElementById('nextBtn').disabled = true;
    document.getElementById('question').innerHTML = `${question['question']}`;
    document.getElementById('answer_1').innerHTML = `${question['answer_1']}`;
    document.getElementById('answer_2').innerHTML = `${question['answer_2']}`;
    document.getElementById('answer_3').innerHTML = `${question['answer_3']}`;
    document.getElementById('answer_4').innerHTML = `${question['answer_4']}`; 
    document.getElementById('allQuestions').innerHTML = `${currentQuestion+1} von ${questions.length} Fragen `; 
    updateProgressbar()
}

function updateProgressbar(){
    let percent = currentQuestion / (questions.length-1) * 100;
        percent = Math.round(percent);
        document.getElementById('progress-bar').style = `width: ${percent}%;`;
        document.getElementById('progress-bar').innerHTML =`${percent}%`;
}

function answer(i){
    
    let question = questions[currentQuestion]
    if (i == question['rightAnswer']){
        document.getElementById(`answer_${i}`).parentNode.classList.add('right')        
        rightAnswers++;
    }
    else{
        document.getElementById(`answer_${i}`).parentNode.classList.add('wrong')
        document.getElementById(`answer_${question['rightAnswer']}`).parentNode.classList.add('right')
        
    }
    disableAllInputs();
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if(currentQuestion<questions.length){
        currentQuestion++;        
    }
    if (currentQuestion!=questions.length) {
        addQuestion();
    } else {
        showEndscreen();
    } 
    resetAnswerFields();   
}

function disableAllInputs(){
    document.getElementById('answer_1_wrapper').disabled = true;
    document.getElementById('answer_2_wrapper').disabled = true;
    document.getElementById('answer_3_wrapper').disabled = true;
    document.getElementById('answer_4_wrapper').disabled = true;
}

function resetAnswerFields(){
    document.getElementById(`answer_1`).parentNode.classList.remove('right','wrong')
    document.getElementById(`answer_2`).parentNode.classList.remove('right','wrong')
    document.getElementById(`answer_3`).parentNode.classList.remove('right','wrong')
    document.getElementById(`answer_4`).parentNode.classList.remove('right','wrong')
    document.getElementById('answer_1_wrapper').disabled = false;
    document.getElementById('answer_2_wrapper').disabled = false;
    document.getElementById('answer_3_wrapper').disabled = false;
    document.getElementById('answer_4_wrapper').disabled = false;
}

function showEndscreen(){
    startConfetti();
    TADAA.play();
    document.getElementById('endscreen').style ='';
    document.getElementById('gamescreen').style ='display: none;';
    document.getElementById('counterRight').innerHTML = `Du hast ${rightAnswers} von ${questions.length} Fragen Richtig!`;
    
}

function gameReset(){
    document.getElementById('endscreen').style ='display: none;';
    document.getElementById('gamescreen').style ='';
    currentQuestion=0;
    rightAnswers=0;
    stopConfetti();
    addQuestion();
}