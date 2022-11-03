var btn = document.querySelector('button');
var aplhaLenght = document.getElementById('alphaLenght');
var alphaUpper = document.getElementById('alphaUpper');
var alphaLower = document.getElementById('alphaLower');
var alphaSpace = document.getElementById('alphaSpace');
var alphaSpecial = document.getElementById('alphaSpecial');
var alphaNumber = document.getElementById('digits');
var alphaVowels = document.getElementById('alphaVowels');
var alphaConsonant = document.getElementById('alphaConsonant');

const audio = new Audio();
audio.src = "sounds/robotclick.wav";

const speech = new Audio();
speech.src = "sounds/speech2.wav";

// function MySpeech(){
//     speech.play();
// }
document.body.addEventListener("", function () {
    speech.play();
})

function validate() {
    var x = document.getElementById('search').value;
    if (x == "") {
      alert("Fields cant be empty.");
    }
  }


function lenghtAlpha(alpha){
    aplhaLenght.innerHTML=alpha.length;
}


function alphaOperation(alpha){
    var upper=lower=number=special=space=vowels=consonants=0;

    for(var i=0; i<alpha.length; i++)
    {
        if(alpha[i] >= "A" && alpha[i] <= "Z"){
            upper++;
        }else if(alpha[i] >= "a" && alpha[i] <= "z"){
            lower++;
        }else if(alpha[i] >= "0" && alpha[i] <= "9"){
            number++;
        }else if(alpha[i] === " "){
            space++;           
        }else{
            special++;
        }
    }
    alphaUpper.innerHTML=upper;
    alphaLower.innerHTML=lower;
    alphaNumber.innerHTML=number;
    alphaSpace.innerHTML=space;
    alphaSpecial.innerHTML=special;

    
    
// ========[ vowelConsonants ]============

    for(var i=0; i<alpha.length; i++)
    {
    if(alpha[i] === 'A' || alpha[i] === 'a' ||
    alpha[i] === 'E' || alpha[i] === 'e' ||
    alpha[i] === 'I' || alpha[i] === 'i' ||
    alpha[i] === 'O' || alpha[i] === 'o' ||
    alpha[i] === 'U' || alpha[i] === 'u'){
     vowels++;            
    }else{
         consonants++;
    }
}
    var finalConsonant= consonants-special-number-space;
    alphaVowels.innerHTML = vowels;
    alphaConsonant.innerHTML = finalConsonant;
}

// ===[ Button Click Listener]===
btn.onclick = function(){
    var alphaInput = document.getElementById('search').value;
    audio.play();
    validate();
    lenghtAlpha(alphaInput);
    alphaOperation(alphaInput);
};

// ===[ KeyStroke Listener ]===
var input = document.getElementById("search");
input.addEventListener('keydown', function(event) {
    if(event.key == "Enter") {        
    var alphaInput = document.getElementById('search').value;
        audio.play();
        validate();
        lenghtAlpha(alphaInput);
        alphaOperation(alphaInput);
    }
});

input.onclick = function(){
    speech.play();
}

























// ========[ Switch Statement ]=======
// switch (alpha[1]) {
//     case(alpha[i] >= "A" && alpha[i] <= "Z"):
//         upper++;
//         // break;
//     case(alpha[i] >= "a" && alpha[i] <= "z"):
//         lower++;
//         // break;
//     case(alpha[i] >= "0" && alpha[i] <= "9"):
//         number++;
//         // break;
//     case(alpha[i] === " "):
//         space++;
//         // break;
//     default:
//         special++;
//         // break;
// }