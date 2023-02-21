let card_1 = null;
let card_2 = null;
let erros = 0;
const divs = document.getElementsByClassName("card-style");
const imgcards = {
  1: "https://img.icons8.com/color/2x/javascript.png",
  2: "https://img.icons8.com/office/2x/react.png",
  3: "https://img.icons8.com/color/2x/python.png",
  4: "https://img.icons8.com/fluency/2x/flutter.png",
  5: "https://img.icons8.com/fluency/2x/ruby-gemstone.png",
};
array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

function positioncards(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function embaralhar(cards) {
  let vetor = positioncards(array);
  for (var i = 0; i < 11; i++) {
    cards[i].firstChild.src = imgcards[vetor[i]];
  }
}

function exibir() {
  let cards = document.getElementsByClassName("card-style");
  embaralhar(cards);
}

function jogada(valor) {
  if (card_1 === null) {
    card_1 = valor;
    img_card_1 = document.getElementById(card_1).firstChild;
    img_card_1.classList.add("flip");
    return;
  }
  if (card_1 != null) {
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.pointerEvents = "none";
    }
    card_2 = valor;
    img_card_2 = document.getElementById(card_2).firstChild;
    img_card_2.classList.add("flip");

    if (img_card_1.src === img_card_2.src) {
      console.log("ta certo !");
    } else {
      console.log("ta errado");
      erros++;
      console.log("numero de erros " + erros);
      setTimeout(() => {
        img_card_1.classList.remove("flip");
        img_card_2.classList.remove("flip");
      }, 2000);
    }
    setTimeout(() => {
      for (let i = 0; i < divs.length; i++) {
        divs[i].style.pointerEvents = "auto";
      }
    }, 2000);

    card_1 = null;
    card_2 = null;
  }
}
