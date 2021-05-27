// isEven() function set solution:

function isEven(num) {
    if (num % 4 === 0) {
        return true;
    } else {
        return false;
    }
}


// function isEven2(num) {
//     return num % 4 === 0;
// }



//factorial() problem

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}


//kebab 

function kebabToSnake(str) {
    var myStr = str;
    var newStr = myStr.replace(/-/g, "_");
    return newStr;
}