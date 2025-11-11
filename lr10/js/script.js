function shuffleArray(array){
    let newArray = [...array];
    for(let i=0; i<newArray.length; i++){
        const j = Math.floor(Math.random()*newArray.length);
        [newArray[i],newArray[j]]=[newArray[j],newArray[i]];
    }
    return newArray;
}
function endGame(){
    alert("No attempts left :(");
    location.reload(); 
}
function spinAnimation() {
    let column1 = shuffleArray(FRUITS);
    images[0].src = column1[0].src;
    images[3].src = column1[1].src;
    images[6].src = column1[2].src;
    
    let column2 = shuffleArray(FRUITS);
    images[1].src = column2[0].src;
    images[4].src = column2[1].src;
    images[7].src = column2[2].src;
    
    let column3 = shuffleArray(FRUITS);
    images[2].src = column3[0].src;
    images[5].src = column3[1].src;
    images[8].src = column3[2].src;
}

const enteredName = prompt("Enter name:");
let userName = document.querySelector('#userName');
if (enteredName&&userName&&isNaN(enteredName)) {
    userName.textContent = enteredName;}
    else {
    alert("Name is not entered!")
    userName.textContent = "NoName";
}
let attemptsLeft = 3;
let isGambling = false;
const FRUITS = [
    {src: "images/banana.png"},
    {src: "images/charry.png"},
    {src: "images/grape.png"},
    {src: "images/lemon.png"},
    {src: "images/orange.png"},
    {src: "images/watermelon.png"}
];
let images = document.querySelectorAll('.casino-grid img');
const btn = document.querySelector('#funcCasino');
btn.addEventListener('click', ()=>{
    if(attemptsLeft <= 0){
        endGame();
        return;
    }
    if(isGambling === true){
        return; 
    }
    isGambling = true;
    attemptsLeft--;
    images.forEach(img => {
        img.classList.remove('neon');
    });
    const spinInterval = setInterval(spinAnimation, 100);
    setTimeout(()=> {
        clearInterval(spinInterval);
        let column1 = shuffleArray(FRUITS);
    images[0].src = column1[0].src;
    images[3].src = column1[1].src;
    images[6].src = column1[2].src;
    
    let column2 = shuffleArray(FRUITS);
    images[1].src = column2[0].src;
    images[4].src = column2[1].src;
    images[7].src = column2[2].src;
    
    let column3 = shuffleArray(FRUITS);
    images[2].src = column3[0].src;
    images[5].src = column3[1].src;
    images[8].src = column3[2].src;
let isWin = false;
    if(images[0].src === images[1].src && images[1].src === images[2].src){
        isWin=true;
         setTimeout(()=>{for(let i=0; i<3; i++){
            images[i].classList.add('neon');
        }},50) 
    }
    else if (images[3].src === images[4].src && images[4].src === images[5].src){
        isWin=true;
        setTimeout(()=>{for(let i=3; i<6; i++){
            images[i].classList.add('neon');
        }},50) 
    }
    else if (images[6].src === images[7].src && images[7].src === images[8].src){
        isWin=true;
        setTimeout(()=>{for(let i=6; i<9; i++){
            images[i].classList.add('neon');
        }},50) 
    }
    if(isWin){
        setTimeout(()=>{
        alert("!BIG WIN 666!");
        attemptsLeft = 0;
    location.reload(); 
},500)
    }
    else isGambling = false;
    }, 500)
    
});


