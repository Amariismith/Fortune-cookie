var fortunes = [
  // add more array items here if you want, make sure you put a comma between each one. You can use HTML here! Just remember that if it contains quotes, they need to be escaped, like this: \"
  "You will be a Software Developer in 6 years, and married to Micheal jackson with 12 kids",
  "You will be a Registered Nurse in 12 years, and married to Ryan Reynolds with 3 kids",
  "You will be a Game devolper in 3 years, and married to Edward Cullen with 1 kids"
];

function tellFortune() {
  
  // generate a random number between 0 and the number of the array items
  var randomNumber = Math.floor(Math.random() * fortunes.length);

  // print the random number to the console log to make sure it's working
  console.log("random number: " + randomNumber);

  // take the fortune at the random spot in the array and insert it into the "fortune" div
 document.getElementById("fortune").innerHTML = fortunes[randomNumber];
}

function reset() {
  // what goes here? (hint: make the fortune div contain an empty string)
  
}