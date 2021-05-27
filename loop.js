// Even numbera
console.log("print all numbers between -12 and 19");
for(var i = -12;i <= 19; i++ ) {
    console.log(i);
}

console.log("count all even numbers btw 10 to 40");
for(var i = 10; i <= 40; i+=2){
    console.log(i);
}

//Fizz buzz

$line = 0;
console.log = function(str) {
    var $console =
    document.querySelector('.console');
    $console.innerHTML= $console.innerHTML + "<span>" + ++$line + ":" + "</span><br>"
}

// main function
for (x=0;x++<50;) console.log((x%3?"":"fizz")+(x%6?"":"buzz"))