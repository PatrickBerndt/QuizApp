let currentQuestion = 0

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
}

function answer(i){
    let question = questions[currentQuestion]
    if (i == question['rightAnswer']){
        document.getElementById(`answer_${i}`).parentNode.classList.add('right')
    }
    else{
        document.getElementById(`answer_${i}`).parentNode.classList.add('wrong')
        document.getElementById(`answer_${question['rightAnswer']}`).parentNode.classList.add('right')
    }
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById(`answer_1`).parentNode.classList.remove('right','wrong')
    document.getElementById(`answer_2`).parentNode.classList.remove('right','wrong')
    document.getElementById(`answer_3`).parentNode.classList.remove('right','wrong')
    document.getElementById(`answer_4`).parentNode.classList.remove('right','wrong')
    if(currentQuestion == questions.length){
        currentQuestion =0
    }
    addQuestion();
}
