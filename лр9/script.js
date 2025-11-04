const enteredName = prompt("Enter name:");
let userName = document.querySelector('#userName');
 let countUser = 0, countComp = 0, iterationCount = 0;
if (enteredName&&userName&&isNaN(enteredName)) {
    userName.textContent = enteredName;}
    else {
    alert("Name is not entered!")
    userName.textContent = "NoName";
}
const cards = [
    {value:6, img:'images/6.png'},
    {value:7, img:'images/7.png'},
    {value:8, img:'images/8.png'},
    {value:9, img:'images/9.png'},
    {value:10, img:'images/10.png'},
    {value:2, img:'images/j.png'},
    {value:3, img:'images/q.png'},
    {value:4, img:'images/k.png'},
    {value:11, img:'images/t.png'},
];
function getRandomCard(){
    const randomCard = Math.floor(Math.random()*cards.length);
    return cards[randomCard];
}
const userCardImage = document.querySelector("#userCardImage");
const computerCardImage = document.querySelector("#computerCardImage");
const scoreBoxUser = document.querySelector('.box1');
const scoreBoxComp = document.querySelector('.box2');
const btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
    const scoreUser = document.querySelector("#scoreUser");
    const scoreComputer = document.querySelector("#scoreComputer");
    if (iterationCount === 3) {
        countUser = 0;
        countComp = 0;
        iterationCount = 0;
        scoreUser.textContent = '0';
        scoreComputer.textContent = '0';
        userCardImage.src = 'images/back.png'; 
        computerCardImage.src = 'images/back.png'; 
        return; 
    }
    iterationCount++;
    let userRandomCard = getRandomCard();
    let compRandomCard = getRandomCard();
    countUser+=userRandomCard.value;
    countComp+=compRandomCard.value;
    userCardImage.src=userRandomCard.img;
    computerCardImage.src=compRandomCard.img;
    scoreUser.textContent=countUser;
    scoreComputer.textContent=countComp;
    if(userRandomCard.value>compRandomCard.value){
        scoreBoxUser.classList.add('neon-glow');
        setTimeout(() => {
            scoreBoxUser.classList.remove('neon-glow');
        }, 800);
        scoreBoxComp.classList.add('neon-glow-red');
        setTimeout(() => {
            scoreBoxComp.classList.remove('neon-glow-red');
        }, 800);
    } else if (userRandomCard.value < compRandomCard.value) {
        scoreBoxComp.classList.add('neon-glow');
        setTimeout(() => {
            scoreBoxComp.classList.remove('neon-glow');
        }, 800);
        scoreBoxUser.classList.add('neon-glow-red');
        setTimeout(() => {
            scoreBoxUser.classList.remove('neon-glow-red');
        }, 800);
    }
    if (iterationCount === 3) {
        setTimeout(()=> {
            if (countUser > countComp) {
            alert( "You Win!");
        } else if (countUser < countComp) {
            alert( "Computer Wins! Try harder:)");
        } else {
            alert("It's a draw!");
        }
        },200);
       
    }
    
    
});