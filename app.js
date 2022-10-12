array = [1,1,2,2,3,3,4,4,5,5]

function shuffleArray(array) {
   for (var i = array.length - 1; i > 0; i--) {
   
       // Generate random number
       var j = Math.floor(Math.random() * (i + 1));
                   
       var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   }
       
   return array;
   
}

x = shuffleArray(array)
console.log(array.slice(0,5))
console.log(array.slice(5,10))