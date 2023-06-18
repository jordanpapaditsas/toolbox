function add7(number) {      // Add function, returns result of '+'; 
  return number + 7;
}

console.log(add7(10));


function multiply(a, b) {   // Multiplication function, returns result of '*';
  return a * b;
}

console.log(multiply(10, 5));


function capitalize(string) {   // function capitalize,  using toUpperCase(), slice(), tolowerCase() functions for modifying a string.
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize("coDiNg"));


function lastLetter(string) {   // function lastLetter, returns the last letter of a string using charAt() function by adding as parameter the string.length - 1.
  return string.charAt(string.length - 1);
}


console.log(lastLetter("coding"));