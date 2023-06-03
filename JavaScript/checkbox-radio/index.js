
//    Checkbox statement true/false with the long way.

// document.getElementById("button").onclick = function() {
//  if (document.getElementById("checkbox").checked) {
//   console.log("You are subscribed!");
//  } else {
//   console.log("You are not subscribed!");
//  }
// }

//    Checkbox statement true/false with the short way.

  document.getElementById("button").onclick = function() {

  const checkbox = document.getElementById("checkbox");
  const visa = document.getElementById("visa-button");
  const masterCard = document.getElementById("mastercard-button");
  const paypal = document.getElementById("paypal-button");

  if (checkbox.checked) {
   console.log("You are subscribed!");
  } else {
   console.log("You are not subscribed!");
  }

  if (visa.checked) {
    console.log("Congrats! You paid with Visa!");
  } else if (masterCard.checked) {
    console.log("Congrats! You paid with MasterCard!");
  } else if (paypal.checked) {
    console.log("Congrats! You with Paypal!");
  } else {
    console.log("You must select a payment type!");
  }
}