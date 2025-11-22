function shuffle(array){
    let index = array.length, randomIndex;
    while(index!= 0){
        randomIndex = Math.floor(Math.random() * index);
    index--;
    [array[index], array[randomIndex]] = [ array[randomIndex], array[index]];
    }
    return array;
}
let dictionaryEasy = [
    {word: "Cat", translation: "кіт"},
    {word: "Table", translation: "стіл"},
    {word: "Book", translation: "книга"},
    {word: "House", translation: "будинок"},
    {word: "Car", translation: "автомобіль"},
    {word: "Pen", translation: "ручка"},
    {word: "School", translation: "школа"},
    {word: "Tree", translation: "дерево"},
    {word: "Chair", translation: "крісло"},
    {word: "Friend", translation: "друг"}
];
let dictionaryMedium = [
    {word: "Journey", translation: "подорож"},
    {word: "Library", translation: "бібліотека"},
    {word: "Computer", translation: "комп'ютер"},
    {word: "Teacher", translation: "вчитель"},
    {word: "Robot", translation: "робот"},
    {word: "Bicycle", translation: "велосипед"},
    {word: "Hospital", translation: "лікарня"},
    {word: "Restaurant", translation: "ресторан"},
    {word: "Calendar", translation: "календар"},
    {word: "Apartment", translation: "квартира"}
];
let dictionaryHard = [
    {word: "Pneumonoultramicroscopicsilicovolcanoconiosis", translation: "пневмоконіоз"},
    {word: "Antidisestablishmentarianism", translation: "антимонархізм"},
    {word: "Floccinaucinihilipilification", translation: "оцінка чогось як абсолютно незначного"},
    {word: "Psychoneuroimmunology", translation: "психонейроімунологія"},
    {word: "Hippopotomonstrosesquipedaliophobia", translation: "страх перед довгими словами"},
    {word: "Triskaidekaphobia", translation: "страх перед числом 13"},
    {word: "Lophophorata", translation: "лопофорат"},
    {word: "Zugzwang", translation: "ситуація, коли кожен хід погіршує становище"},
    {word: "Kaleidoscope", translation: "калейдоскоп"},
    {word: "Counterproductive", translation: "контрпродуктивний"}
];
let correctCount=0;
let incorrectCount=0;

let indexOfCards =0; 
let currentArray = shuffle(dictionaryEasy);
let currentWord = currentArray[indexOfCards];


$("#difficulty").change(function(){
    let level = $(this).val();

    if(level ==="easy") currentArray = shuffle(dictionaryEasy);
    if(level ==="middle") currentArray = shuffle(dictionaryMedium);
    if(level ==="hard") currentArray = shuffle(dictionaryHard);
        
    startLevel();
    }
);

function startLevel(){
    indexOfCards =0; 
    correctCount=0;
    incorrectCount=0;

    currentWord = currentArray[indexOfCards];
    $("#correct").text(correctCount);
    $("#incorrect").text(incorrectCount);

    $(".word").text(currentWord.word);
    $("#number").text(`${indexOfCards+1}/${currentArray.length}`);
    $("#inputTrans").val("");
}
$(".card").click(function(){
    let userword = $("#inputTrans").val().toLowerCase().trim();
    $(".error-message").remove();
    if(userword.trim() ==="" ){
        $(".input").after('<p class="error-message">Введіть переклад!</p>');
        return;
    }

    if(userword===currentWord.translation){
        correctCount++;
        $("#correct").text(correctCount);
        $("#inputTrans").addClass("cor");

        $(".card").addClass("flip");
        setTimeout(()=>{
            $(".card").removeClass("flip");
        },600);
    } else{
        incorrectCount++;
        $("#incorrect").text(incorrectCount);
        $("#inputTrans").addClass("incor");
        $(".card").addClass("shake");
         $("#inputTrans").after(`<p class="error-message">Правильний переклад: ${currentWord.translation}</p>`);
          
        setTimeout(()=>{
            $(".card").removeClass("shake");
        },300);
    }

    setTimeout(next, 1500);
})


function next(){
    $(".card").animate({
        opacity:0, left:"-30px"
    }, 200, function(){
    indexOfCards++;
     $("#inputTrans").removeClass("cor");
     $("#inputTrans").removeClass( "incor");
     $(".error-message").remove();
    if(indexOfCards < currentArray.length){
        currentWord = currentArray[indexOfCards];
        $(".word").text(currentWord.word);    
        $("#inputTrans").val("");
       
        $("#number").text(`${indexOfCards + 1} / ${currentArray.length}`);
    } else{
        alert("Рівень Ваших знань: "+`${correctCount}/${currentArray.length}`);
        startLevel();
    }
    $(".card").css({left:"30px"}).animate({opacity:1, left:"0"},200);
    });
}

$("img[alt='right']").click(()=>{
    next();
});
startLevel();