// I want to improve my logical thinking and programming skills in JavaScript,
// especially when it comes to pattern printing and array-based pattern problems.
// My goal is to build confidence in my ability to think logically and solve problems
// without memorizing solutions.
// Please provide a list of 40 pattern-related problems, starting
// from basic to advanced, that will challenge my logical abilities.
// These problems should help me improve my problem-solving skills and encourage me
// to think critically, allowing me to tackle any pattern-related problem confidently.

//PRINT THE FOLLOWING PATTERNS

// *
// * *
// * * *
// * * * *
// * * * * *

const halfPyramid = () => {
  for (let i = 0; i < 5; i++) {
    let array = []; //let stars = ""  or an empty string
    for (let j = 0; j <= i; j++) {
      array.push("*"); //stars += "*";
    }
    console.log(array.join(""));
  }
};

console.log(halfPyramid());

// *****
// *****
// *****
// *****
// *****

const square = () => {
  for (let i = 0; i < 5; i++) {
    let array = [];
    for (let j = 0; j < 5; j++) {
      array.push("*");
    }
    console.log(array.join(""));
  }
};

console.log(square());

// 1
// 12
// 123
// 1234
// 12345

const numberRT = () => {
  for (let i = 1; i <= 5; i++) {
    let array = [];
    for (let j = 1; j <= i; j++) {
      array.push(j);
    }
    console.log(array.join(""));
  }
};

console.log(numberRT());

// * * * * *
// * * * *
// * * *
// * *
// *

const invertedRT = () => {
  for (let i = 5; i > 0; i--) {
    let array = [];
    for (let j = 0; j < i; j++) {
      array.push("*");
    }
    console.log(array.join(""));
  }
};

console.log(invertedRT());

//         *
//      *  *  *
//    *  * * *  *
//  *  * * * * *  *

// multiples of 2
// 1 * 2 = 2 - 1
// 2 * 2 = 4 - 1

const pyramid = (height) => {
  for (let i = 1; i <= height; i++) {
    let spaces = height - i; // Number of spaces before stars start
    let spaceString = "";

    // Add the required spaces
    for (let j = 1; j <= spaces; j++) {
      spaceString += " ";
    }

    let stars = 2 * i - 1; // Number of stars in each row

    let starString = "";

    // Add the stars with proper spacing
    for (let k = 1; k <= stars; k++) {
      starString += "* ";
    }

    // Combine spaces and stars for the final output
    console.log(spaceString + starString);
  }
};

console.log(pyramid(3));

//     1
//    121
//   12321
//  1234321
// 123454321

const numberPyramind = () => {
  for (let i = 1; i <= 5; i++) {
    let space = 5 - i;
    let spaceString = "";

    for (let j = 1; j <= space; j++) {
      spaceString += " ";
    }

    let array = [];

    for (let k = 1; k <= i; k++) {
      array.push(k);
    }

    for (let l = i - 1; l >= 1; l--) {
      array.push(l);
    }

    console.log(spaceString + array.join(""));
  }
};

console.log(numberPyramind());
