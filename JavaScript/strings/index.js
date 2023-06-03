// Useful string properties & methods
 
let userName = "    Jordan Papaditsas    ";
let phoneNumber = "123-456-7890";

console.log(userName.length - 1);
console.log(userName.charAt(2));
console.log(userName.indexOf("i"));
console.log(userName.lastIndexOf("a"));
userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.toLowerCase();

console.log(userName);


phoneNumber = phoneNumber.replaceAll("-", "a");
console.log(phoneNumber);
