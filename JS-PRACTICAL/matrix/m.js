//Q find the diagonal sum of the given matrix
//1 + 5 + 9 + 3 + 5 + 7

const ab = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const diagonalSumfn = (matrix) => {
  const n = matrix.length;
  let diagonalSum = 0;

  for (let i = 0; i < n; i++) {
    console.log(matrix[i]);
    diagonalSum += matrix[i][i];
    diagonalSum += matrix[i][n - 1 - i];
  }

  return diagonalSum;
};

console.log(diagonalSumfn(ab));

//Q find the column sum and add as new array

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// const out = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [12, 15, 18]
// ];

const columnSum = (matrix) => {
  const columnSums = [];
  const matrixLength = matrix[0].length;

  for (let i = 0; i < matrixLength; i++) {
    let sum = 0;
    for (let j = 0; j < matrix.length; j++) {
      sum += matrix[j][i];
    }
    // Push the sum to the columnSums array
    columnSums.push(sum);
  }
  return columnSums;
};

// Test the function
console.log(columnSum(matrix)); // Output: [12, 15, 18]
