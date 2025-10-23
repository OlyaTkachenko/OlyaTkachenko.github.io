const enteredName = prompt("Enter name:");
let userName = document.querySelector('#userName');
 let countUser = 0, countComp = 0;
if (enteredName&&userName&&isNaN(enteredName)) {
    userName.textContent = enteredName;}
    else {
    alert("Name is not entered!")
    userName.textContent = "NoName";
}
const btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
    const numbUser = document.querySelector('#numbUser');
    const numbComputer = document.querySelector('#numbComputer');
    let scoreUser = document.querySelector("#scoreUser");
    let scoreComputer=document.querySelector("#scoreComputer");

    let randomUser = Math.floor(Math.random() * 100);
    let randomComputer = Math.floor(Math.random() * 100);
    numbUser.textContent = randomUser;
    numbComputer.textContent = randomComputer;
   
    let scoreBoxUser=document.querySelector('.box1');
    let scoreBoxComp = document.querySelector('.box2');
    if(randomUser>randomComputer){
        countUser++;
        scoreUser.textContent = countUser;
        scoreBoxUser.classList.add('neon-glow');
        setTimeout(() => {
            scoreBoxUser.classList.remove('neon-glow');
        }, 800);
        scoreBoxComp.classList.add('neon-glow-red');
        setTimeout(() => {
            scoreBoxComp.classList.remove('neon-glow-red');
        }, 800);
    }
    else if(randomUser<randomComputer){
        countComp++;
        scoreComputer.textContent = countComp;
        scoreBoxComp.classList.add('neon-glow');
        setTimeout(() => {
            scoreBoxComp.classList.remove('neon-glow');
        }, 800);
        scoreBoxUser.classList.add('neon-glow-red');
        setTimeout(() => {
            scoreBoxUser.classList.remove('neon-glow-red');
        }, 800);
        
    }
   if(countUser === 3){
    setTimeout(()=>{alert("You Win!");
    countUser = 0;
    scoreUser.textContent = countUser;
    countComp=0;
    scoreComputer.textContent = countComp;
         numbUser.textContent = '';
    numbComputer.textContent = '';
},800)
    
   }
   else if(countComp ===3){ 
    setTimeout(()=>{
alert("Computer Wins! Try harder:)");
    countComp=0;
    scoreComputer.textContent = countComp;
    countUser = 0;
    scoreUser.textContent = countUser;
     numbUser.textContent = '';
    numbComputer.textContent = '';
    }, 200)
   }
});