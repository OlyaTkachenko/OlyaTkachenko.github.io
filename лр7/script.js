const answers =[ "Так", "Ні", "Можливо", "Точно!", "Навряд чи", "Спитай пізніше", "Без сумніву", "Краще не казати"];
const addHTML =`
    <div class="main">
    <div class = "add"></div>
        <input class="question-input" placeholder="Задай своє питання..."> 
    
        <div class="magic-ball">
            <p class="answer-text">???</p>
        </div>
    </div>
`;
document.body.innerHTML = addHTML;
const question = document.querySelector(".question-input");
const ball = document.querySelector(".magic-ball");
const answer = document.querySelector(".answer-text");
const error = document.querySelector(".add");

function predict(){
    error.innerHTML='';
    if (question.value.trim() === ''){
        let outErr = document.createElement('p');
        outErr.textContent = "Введіть запитання!";
        error.appendChild(outErr);
        return;
    }
    if(!question.value.endsWith('?')) {
        let outErr = document.createElement('p');
        outErr.textContent = "Запитання має закінчуватися \"?\" ";
        error.appendChild(outErr);
        return;
    }
    ball.classList.add('shake');
    setTimeout(() =>{
        let  random = Math.floor(Math.random()*answers.length);
        answer.textContent = answers[random];
        ball.classList.remove('shake');

    }, 500  );
}

ball.addEventListener('click', predict);