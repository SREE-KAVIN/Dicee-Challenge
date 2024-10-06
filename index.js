// Generate a random number for Player 1's dice
var randomNumber1 = Math.ceil(Math.random()*6); // Random number between 1 and 6
var randomdice1 = "dice"+ randomNumber1; // Create dice file name
var randomimage1 ="./images/"+randomdice1+".png"; // Path to the dice image
var image1 = document.querySelectorAll("img")[0]; // Select the first image
image1.setAttribute("src", randomimage1); // Set the image source for Player 1's dice

// Generate a random number for Player 2's dice
var randomNumber2 = Math.ceil(Math.random()*6); // Random number between 1 and 6
var randomdice2 ="dice"+ randomNumber2; // Create dice file name
var randomimage2 ="./images/"+randomdice2+".png"; // Path to the dice image
var image2 = document.querySelectorAll("img")[1]; // Select the second image
image2.setAttribute("src", randomimage2); // Set the image source for Player 2's dice

// Determine the winner based on the random numbers
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!"; // Player 1 wins
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩"; // Player 2 wins
}
else {
  document.querySelector("h1").innerHTML="Draw!"; // It's a draw          
}
