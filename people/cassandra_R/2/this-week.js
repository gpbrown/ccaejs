// Exercise 1.review - Ask the user for their name. Welcome them with a personalized message.
	/*var username = prompt(" what's your name?");
	alert("Welcome "+username+"!");
	*/
// 2.1 - Conditionals
// Exercise 2.1.1 - Ask the user for 2 numbers. Tell them if the first or second number was bigger.
	/*var num1 = prompt("What's the first number?");
	var num2 = prompt("What's the second number?");

	if (num1 > num2) {
		var largerNum = num1;
		alert(largerNum+" is larger")
	}
	if (num2 > num1) {
		var largerNum = num2;
		alert(largerNum+" is larger")
	}
	else {
		alert("I'm confused");
	}
	*/

// Exercise 2.1.2 - Ask the user for a number. Tell the user whether it is odd or even.
	/*var numb = prompt("Give me an even or odd number.");

	if (numb % 2 == 0) {
		alert(numb+" is even!")
	}
	else {
		alert(numb+" is NOT an even number!")
	};
	*/

// Exercise 2.1.3 - Ask the user what month they were born in. Tell them what season that month is in.



// 2.2 - Loops
// Exercise 2.2.1 - Use a loop to count from 10 to 1. Alert each value as you count.


// Exercise 2.2.2 - Use a loop to count from 10 to 20. Add each number to a total sum and alert that value at the end.


// Exercise 2.2.3
// Generate a random number (I haven't told you how to do this. Try Googling for it)
// Ask the user to try to guess the number (Give them the possible range)
// Tell the user if they got the number or if they were too high or too low.
// Let the user continue guessing until they get to the right answer.



// 2.3 - Arrays
// Create an array of usernames. They can be anything.
var arrayOfUnames = ["ADAM", "CASSANDRA", "DAVE", "DOUG", "EMILY", "GRETCHEN", "RADA", "SARAH", "SHELBY"];
// Ask the user for their name. Check to see if that name is on the list.
var yourName = prompt("Halt! Who goes there?");

var yourName = yourName.toUpperCase();

// If the user is on the list, welcome them in. Otherwise, tell them to leave!
// Bonus: Now that this is working, try Googling for an easier way to do this.
if (arrayOfUnames.indexOf(yourName) == -1){
	alert("No-go good buddy!");
}

else {
	alert("You're in!");
}

// Exercise 2.3.2
// Generate 10 random numbers and show them all to the user.
// Ask the user for the index of the biggest number. Tell them whether or not they were right.


// Exercise 2.3.3 - Modify your code from exercise 2.2.3 to allow the user to replay.
// Add a scoreboard array to keep track of how many guesses it took them to win.
// Show the user the scoreboard each time and congratulate them if they beat their best.