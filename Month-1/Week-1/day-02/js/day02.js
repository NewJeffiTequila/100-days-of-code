const text = "Dory talks to whales Nemo to find Nemo";
const array = text.split(" ");
const palavra = "Nemo";
var position = 0;

function findNemo(text) {
    
}
array.forEach(element => {
    
});

Object.keys(array).forEach(key => {
    position++
    if (array[key] == palavra) {
        
        console.log('I find NEMO at'+ position)
        return;
    }
    
})

array.forEach(function(item, key){
    if (item == palavra) {
        console.log('I find NEMO at'+position);
        return;
    }
    position++;
}
);

// console.log(split);