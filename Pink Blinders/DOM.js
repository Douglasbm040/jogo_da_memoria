
const imgcards = {
    1 : "https://img.icons8.com/color/2x/javascript.png",    
    2 : "https://img.icons8.com/office/2x/react.png",
    3 : "https://img.icons8.com/color/2x/python.png",
    4 : "https://img.icons8.com/fluency/2x/flutter.png",
    5 : "https://img.icons8.com/fluency/2x/ruby-gemstone.png"
}
array = [1,1,2,2,3,3,4,4,5,5]

function positioncards(array) {
   for (var i = array.length - 1; i > 0; i--) {
   
       // Generate random number
       var j = Math.floor(Math.random() * (i + 1));
                   
       var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   }
       
   return array;
   
}

//! lista de cartas 
function embaralhar(cards) {
    let vetor =positioncards(array);
    for (var i = 0 ; i < 11; i++) {
        cards[i].firstChild.src=imgcards[vetor[i]]
    }
}

function exibir() {    
    let cards = document.getElementsByClassName("card-style")
    embaralhar(cards)
}

function jogada() {
    
}








