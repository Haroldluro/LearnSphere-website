const circle1 = document.getElementById('very-good');
const circle2 = document.getElementById('good-job');
const circle3 = document.getElementById('nice-try');

window.addEventListener('load', () =>{
    const score = sessionStorage.getItem('score');
    document.getElementById('number').innerHTML = score;
    scoreGrade(score);

});

function scoreGrade(scr){
    if(scr == 5){
        circle1.classList.add("blue");
    }
    else if(scr >=3){
        circle2.classList.add("blue");
    } 
    else{
        circle3.classList.add("blue");
    }
}