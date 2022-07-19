// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a string variable 'name' and assign it with a value of the name 'Dane'.
// We check the conditions, if the variable name is "true/exact match only" to the name 'Mary'.
// The name Dane is not the same as Mary, so it is false. Which mean that we console.log 'How do you do?'.
// If the name Dane and Mary do match and it is true, then we console.log 'Hi, Mary!' instead. 

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable 'secret' with no set vaule assign. 
// We also decalre variable 'code' with a integer vaule of '123'. 
// We will have to check the condition where if the value of code is "true/exact match only" to the value of '123'.
// Code 123 is equal to 123. Which is true, so console.log (secret) which then will display 'super' because we now set secret with a new value of 'super'. 
// We have also set a new value to variable code to 'code * 2'. Which mean code is now 246.
// We looked at another condition where if code is greater then 250. Which code 246 is not greater than 250. 
// We console.log (secret) will show 'duper' instead because we set the value of secret to 'duper' if the condition was met. 

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare variable 'isStudent' with value of true. 
// We declare variable 'age' with a number value of 34.
// We declare variable 'zip' with a number value 55407. 
// We checked condition if 'isStudent' is equal to the value of true and also if the value of 'zip' is greater than 80000.
// Value of 'isStudent' is true, however  'zip' value of 55407 is not greater then 80000. We console.log it with `You're a student on the West Coast!`.
// We checked condition else if, if isStudent is equal to false or age value is less than 30. 
// isStudent is true which is not equal to false and also age value of 34 is not less than 30. We console.log it with 'What are your hobbies?'.
// We checked another else if condition, where if isStudent is equal to true. Which it is true, so we console.log it with 'Welcome to Prime!'. 
// Last but not least, if all condtion we checked eariler are not met, then that means all condtion are false/wrong so we console.log it with 'How about the weather?'. 


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIXED - colorOne should be set to red and colorTwo should be set to blue. 
// let colorOne = 'blue';
// let colorTwo = 'red';

if (mix === true) {
  colorOne = 'purple';
}

//FIXED - We should also add colorTwo = 'purple' also. 
if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';
}

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}


//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

