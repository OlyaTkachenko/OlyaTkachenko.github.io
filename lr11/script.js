function shuffle(array){
    let index = array.length, randomIndex;
    while(index!= 0){
        randomIndex = Math.floor(Math.random() * index);
    index--;
    [array[index], array[randomIndex]] = [ array[randomIndex], array[index]];
    }
    return array;
}
let dictionary=[
    {word:"Predator", translation: "хижак"},
    {word:"Cacodemonomania", translation: "віра в одержимість злими духами"},
    {word:"Hullabaloo", translation: "балаган"},
    {word:"Lollygag", translation: "тинятися"},
    {word:"Mother", translation: "мати"},
    {word:"Software", translation: "програмне забезпечення"},
    {word:"Window", translation: "вікно"},
    {word:"Charger", translation: "зарядний пристрій"},
    {word:"Cup", translation: "чашка"},
    {word:"Doctor", translation: "лікар"},
];
let correctCount=0;
let incorrectCount=0;
let newWordsArray = shuffle(dictionary);
let totalWords = newWordsArray.length;
let indexOfCards =0; 
let arrayTranslation = newWordsArray[indexOfCards];
$(".word").text(arrayTranslation.word);
$("#number").text(`${indexOfCards+1}/${totalWords}`);

function next(){
    indexOfCards++;
     $("#inputTrans").removeClass("cor");
     $("#inputTrans").removeClass( "incor");
     $(".error-message").remove();
    if(indexOfCards < totalWords){
        arrayTranslation = newWordsArray[indexOfCards];
        $(".word").text(arrayTranslation.word);    
        $("#inputTrans").val("");
       
        $("#number").text(`${indexOfCards + 1} / ${totalWords}`);
    } else{
        alert("Рівень Ваших знань: "+`${correctCount}/${totalWords}`)
    }
}


$(".card").click(function(){
    let userword = $("#inputTrans").val().toLowerCase().trim();
    $(".error-message").remove();
    if(userword.trim() ==="" ){
        $(".input").after('<p class="error-message">Введіть переклад!</p>');
        return;
    }

    if(userword===arrayTranslation.translation){
        correctCount++;
        $("#correct").text(correctCount);
        $("#inputTrans").addClass("cor");
    } else{
        incorrectCount++;
        $("#incorrect").text(incorrectCount);
        $("#inputTrans").addClass("incor");
         $("#inputTrans").after(`<p class="error-message">Правильний переклад: ${arrayTranslation.translation}</p>`);
    }

    setTimeout(next, 1500);
})

$("img[alt='right']").click(function(){
    next();
})
