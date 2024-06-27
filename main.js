const circle = document.querySelectorAll(".circle");
const question = document.querySelectorAll(".question-box");
const btn = document.querySelectorAll(".btn");
const ans = document.querySelectorAll(".answer");
const btn_next = document.getElementById("next");
const btn_prev = document.getElementById("previous");
const scr_page = document.getElementById("number");


let progress_num = 0;
let score = {
    total_score : 0,
    set setScr(scr){
        this.total_score = scr;
    },
    get getScr(){
        return this.total_score;
    }
};
let i = 0;

btn.forEach((btn) => {
    btn.addEventListener("click", () =>{
        let answer = btn.getAttribute('value');
        score.setScr = checkAnswer(answer);
        let name = score.getScr;
        sessionStorage.setItem('score', name);
    });
});
try{
    btn_next.addEventListener("click",() =>{
        progress_num ++;
        
            if(progress_num >= 5){
                location.href = 'scorepage.html';
            }
            i = 0;
            resetAnswer();
            updateProgress(progress_num);
            updateQuestion(progress_num); 
    });

    btn_prev.addEventListener("click",() =>{
        progress_num --;
        i = 0;
        resetAnswer();
        updateProgress(progress_num);
        updateQuestion(progress_num);
    });
}catch(err){
    console.log("There is an Error: "+ err);
}

let scr = 0;
function checkAnswer(answer, ){
    if(answer == 'correct'){
        scr ++;
        showAnswer();
    }
    else{
        showAnswer();
    }
    return scr;
}

function showAnswer(){
    btn.forEach((btn) => {
        let box = btn.getAttribute("value");
        if(box == 'correct'){
            ans[i].classList.add("answer-correct");
        }
        else{
            ans[i].classList.add("answer-wrong");
        }
        i++;
    });
}

function updateProgress(progress){
    circle.forEach((crcl) => {
        crcl.classList.contains("circle-active") &&
        crcl.classList.remove("circle-active");
    });

    circle[progress].classList.add("circle-active");
}   

function updateQuestion(progress){
    question.forEach((qst) => {
        qst.classList.contains("show") &&
        qst.classList.remove("show");
    });

    question[progress].classList.add("show");
}

function resetAnswer(){
    ans.forEach(ans => {
        ans.classList.remove("answer-correct");
        ans.classList.remove("answer-wrong");
    });
}