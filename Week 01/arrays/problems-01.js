//vv Find the Sum
const abc = [
  { f: 34, l: 4 },
  { f: 34, l: 4 },
  { f: 34, l: 4 },
  { f: 34, l: 4 },
  { f: 34, l: 4 },
  { f: 34, l: 4 },
];

const abcSum = (abc) => {
  let sum1 = 0;
  abc.forEach((ele) => {
    sum1 += ele.f + ele.l;
  });

  return sum1;
};

const bc = [{ s: 4 }, { d: 4 }, { f: 4 }];

const sum4 = (bc) => {
  let sum = 0;
  bc.forEach((obj) => {
    if (obj.s) {
      sum += obj.s;
    } else if (obj.d) {
      sum += obj.d;
    } else {
      sum += obj.f;
    }
  });

  return sum;
};

// 100 + 1 = 101
// 98 + 3 = 101
// 94 + 7 = 101
// 88 + 13 = 101
// 80 + 21 = 101
// 70 + 31 = 101
// 58 + 43 = 101
// 44 + 57 = 101
// 28 + 73 = 101
// 10 + 91 = 101

const print = () => {
  let i = 100;
  let n = 0;
  let count = 1;

  while (i > 10) {
    console.log(`${(i = i - count * 2)} + ${(n = n + count * 2)} = ${i + n}`);
    count++;
  }
};

const a = [{ adf: [{ adf: [4, 34, 34], daf: 5 }] }];

const sum = (a) => {
  let sum1 = 0;

  a[0].adf.forEach((e) => {
    e.adf.forEach((a) => {
      sum1 += a;
    });
    sum1 += e.daf;
  });

  return sum1;
};

const ab = { b: { c: { d: [2, 3, 4, 5] } } };

const sum3 = (ab) => {
  let sum12 = 0;
  ab.b.c.d.forEach((n) => {
    sum12 += n;
  });

  return sum12;
};

// Find the longest repeating char in string “hdhfkuuuu” output should be uuuu

const longest = (str) => {
  let maxCount = 0;
  let currentCount = 1;
  let longest = "";
  let currentChar = str[0];
  let inSequence = false;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      currentCount++;
      inSequence = true;
    } else {
      if (inSequence && currentCount > maxCount) {
        maxCount = currentCount;
        longest = currentChar;
      }

      currentChar = str[i];
      currentCount = 1;
      inSequence = false;
    }
  }

  // Final check in case the longest sequence is at the end of the string

  if (inSequence && currentCount > maxCount) {
    maxCount = currentCount;
    longest = currentChar;
  }

  return longest.repeat(maxCount);
};

console.log(longest("hdhfkuuuu"));

//Find the second largest without using any built in method
const findSecondLargest = (arr) => {
  let largest = Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};

// Rotate the array k times
function rotateArray(nums, k) {
  const size = nums.length;
  if (size === 0) return nums;

  k = k % size;
  if (k === 0) return nums;

  reverse(nums, 0, size - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, size - 1);

  return nums;
}

function reverse(arr, left, right) {
  while (left < right) {
    let temp = arr[left];
    arr[left++] = arr[right];
    arr[right--] = temp;
  }
}

//Count the frequencies of each charactor in a string
function countCharacterFrequencies(str) {
  const frequencies = {};
  if (frequencies[char]) {
    frequencies[char] += 1;
  } else {
    frequencies[char] = 1;
  }
  return frequencies;
}

//Find the first non repeating charactor
function firstNonRepeatingCharacter(str) {
  const count = {};

  for (let char of str) {
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }

  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return null;
}

//Find the missing number from 1 to N
function findMissingNumber(series, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = series.reduce((acc, val) => acc + val, 0);
  return expectedSum - actualSum;
}

//Check the given string is a palindrome using recursion
const isPalindrome = (string, start = 0, end = string.length - 1) => {
  if (start >= end) {
    return true;
  }

  if (string[start] !== string[end]) {
    return false;
  }

  return isPalindrome(string, start + 1, end - 1);
};

console.log(isPalindrome("malayalam"));
console.log(isPalindrome("hello"));

//Find first and last occurence of an element in an array
function findFirstAndLast(arr, target) {
  let firstIndex = -1;
  let lastIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      if (firstIndex === -1) {
        firstIndex = i; // First occurrence found
      }
      lastIndex = i; // Last occurrence found (updates each time)
    }
  }

  return {
    firstOccurrence: firstIndex,
    lastOccurrence: lastIndex,
  };
}

// Find the first or last occurrence of a target element in a sorted array with duplicates.

function findFirstOccurrence(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let result = -1; // To store the first occurrence

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      result = mid; // Update the result with the current mid
      right = mid - 1; // Search to the left for the first occurrence
    } else if (nums[mid] < target) {
      left = mid + 1; // Target is on the right side
    } else {
      right = mid - 1; // Target is on the left side
    }
  }

  return result; // If not found, return -1
}

// Given a sorted array, find the smallest positive integer that is missing.

const findMissingPositive = (arr) => {
  let expected = 1;

  // Step 1: Iterate through the sorted array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === expected) {
      expected++;
    }
  }

  return expected;
};

// Write a linear search to find the minimum or maximum value in an array.

const Q5 = (arr) => {
  let minElement = Infinity;
  let maxElement = -Infinity;

  for (const n of arr) {
    if (n < minElement) {
      minElement = n;
    }
    if (n > maxElement) {
      maxElement = n;
    }
  }
  return { maxElement, minElement };
};

// Write a function that takes two arrays and returns an array of their intersection.
function findTheLastOccurence(nums, target) {
  let left = 0
  let right = nums.length - 1
  let lastOccurence = -1
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    if (nums[middle] == target) {
      lastOccurence = middle
      left = middle + 1
    } else if (nums[middle] < target) {
      left = middle + 1
    } else if (nums[middle] > target) {
      right = middle - 1
    }
  }
  return lastOccurence
}





// // Write a function to split a linked list into two halves. If the list has an odd number of nodes, the extra node should go to the first half.


// // Write a function to count the total number of nodes in the linked list

// // Remove Duplicates from Unsorted List



// // count majority element

// // (5) - Find the Missing Number
// function findMissingNumber() {}
// // (6) - Find Duplicates in an Array

// // ----------------------
// // 1) Find an Element in an Array:

// // Given an array of integers, find the index of a given target value. If not found, return -1.

// // 2) Find the Maximum and Minimum Elements:

// // Traverse the array using linear search to find the largest and smallest elements.

// // 4) Count the Occurrences of an Element:

// // Count how many times a target value appears in the array.

// // 5) Find the Missing Number:

// // Given an array containing numbers from 1 to n with one number missing, find the missing number.

// // 6) Find Duplicates in an Array:

// // Traverse an array and find if any element is repeated.

// // 7) Search in a Matrix:

// // Given a 2D matrix (not sorted), implement a linear search to find if a target value exists in the matrix.

// // 8) Find Peak Element:

// // A peak element is an element that is greater than its neighbors. Perform a linear scan to find one peak in the array.

// // Binary Search Problems
// // ----------------------
// // 1) Basic Binary Search:

// // Implement binary search to find the index of a target value in a sorted array.

// // 2) Find First and Last Position of a Target:

// // Given a sorted array, find the first and last index of a target value.

// // 3) Find the Square Root:

// // 4) Search in a Rotated Sorted Array:

// // A sorted array is rotated at some pivot. Search for a target value in the rotated sorted array.

// // 5) Find the Missing Number in Sorted Array:

// // A sorted array contains integers in the range 1 to n with one missing. Use binary search to find the missing number.

// // 6) Find the Peak Element:

// // A peak element is greater than its neighbors. Solve the problem using binary search for O(logn) time complexity.

// // Phase 1: Arrays (Week 1-2)
// // Key Concepts:
// // Array Manipulation

// // Sliding Window

// // Two Pointers

// // Prefix/Suffix Sum

// // Sorting & Searching

// // Binary Search on Arrays

// // Easy Questions:
// // Find the maximum element in an array.

// // Concepts: Array traversal, max function.

// // Find the minimum element in an array.

// // Concepts: Array traversal, min function.

// // Reverse an array.

// // Concepts: Array reversal, swapping.

// // Find the sum of all elements in an array.

// // Concepts: Sum, iteration.

// // Check if an array contains duplicate elements.

// // Concepts: Hashing, Array traversal.

// // Find the second largest element in an array.

// // Concepts: Sorting, comparing elements.

// // Find the intersection of two arrays.

// // Concepts: Hashing, set operations.

// // Move all zeros to the end of the array while maintaining the order of other elements.

// // Concepts: Two-pointer technique, shifting elements.

// // Find the largest sum of a subarray (Kadane’s Algorithm).

// // Concepts: Dynamic Programming (DP), Kadane's Algorithm.

// // Medium Questions:
// // Two Sum Problem: Given an array of integers and a target sum, find two numbers that add up to the target.

// // Concepts: Hashing, Two pointers.

// // Find the majority element (element that appears more than n/2 times).

// // Concepts: Boyer-Moore Voting Algorithm, Hashing.

// // Rotate an array by k positions.

// // Concepts: Array manipulation, reversing parts of the array.

// // Subarray with sum k.

// // Concepts: Sliding window, Hash map.

// // Move all negative numbers to the beginning of the array.

// // Concepts: Partitioning, Two-pointer technique.

// // Find the longest subarray with at most k distinct elements.

// // Concepts: Sliding window, Hash map.

// // Find the pair with the smallest difference in an array.

// // Concepts: Sorting, two-pointer technique.

// // Hard Questions:
// // Median of two sorted arrays.

// // Concepts: Binary Search, partitioning arrays.

// // Search in a rotated sorted array.

// // Concepts: Binary Search.

// // Find the "Kth" largest element in an unsorted array.

// // Concepts: Quickselect, Sorting.

// // Find the number of subarrays with a given sum.

// // Concepts: Hash map, sliding window.

// // Trapping Rain Water.

// // Concepts: Dynamic Programming, Two-pointer technique.

// // Maximum Product Subarray.

// // Concepts: Dynamic Programming, Array manipulation.

// // Phase 2: Linked Lists (Week 3-4)
// // Key Concepts:
// // Linked List Operations (Insertion, Deletion, Reversal)

// // Cycle Detection (Floyd’s Algorithm)

// // Fast and Slow pointers

// // Merge Sorted Linked Lists

// // Intersection of Two Linked Lists

// // Easy Questions:
// // Reverse a singly linked list.

// // Concepts: Iterative and Recursive reversal.

// // Find the middle of a linked list.

// // Concepts: Fast and Slow pointers.

// // Detect a cycle in a linked list.

// // Concepts: Floyd’s Cycle-finding Algorithm (Tortoise and Hare).

// // Merge two sorted linked lists.

// // Concepts: Iterative approach.

// // Remove the Nth node from the end of the linked list.

// // Concepts: Fast and Slow pointers.

// // Medium Questions:
// // Find the intersection point of two linked lists.

// // Concepts: Hashing, Two-pointer technique.

// // Detect a cycle in a linked list and return the node where the cycle begins.

// // Concepts: Floyd’s Cycle-finding Algorithm.

// // Flatten a linked list (a multilevel doubly linked list).

// // Concepts: Depth-first traversal, recursion.

// // Reverse a linked list in groups of size k.

// // Concepts: Iterative reversal, group swapping.

// // Remove duplicates from a sorted linked list.

// // Concepts: Linked List traversal, comparison.

// // Hard Questions:
// // Add two numbers represented by linked lists.

// // Concepts: Linked list manipulation, carry-over addition.

// // Rearrange a linked list in-place such that the odd nodes are followed by even nodes.

// // Concepts: Pointer manipulation.

// // Merge K sorted linked lists.

// // Concepts: Min-heap, priority queue.

// // Flatten a linked list of linked lists (Nested list).

// // Concepts: Recursion, merging sorted lists.

// // Reverse every alternate K nodes in a linked list.

// // Concepts: Group reversal, pointer manipulation.

// // Phase 3: Patterns (Week 5-6)
// // Key Patterns:
// // Sliding Window

// // Two Pointers

// // Backtracking

// // Greedy Algorithms

// // Recursion

// // Divide and Conquer

// // Dynamic Programming

// // Sliding Window Questions:
// // Find the maximum sum of a subarray of size k.

// // Concepts: Sliding window.

// // Longest substring without repeating characters.

// // Concepts: Sliding window, Hash map.

// // Longest subarray with sum k.

// // Concepts: Sliding window, Hash map.

// // Smallest subarray with sum greater than or equal to k.

// // Concepts: Sliding window.

// // Count of subarrays with sum k.

// // Concepts: Sliding window, Hash map.

// // Two Pointers Questions:
// // Find pairs in an array that sum up to a target value.

// // Concepts: Two pointers, Sorting.

// // Reverse a string using two pointers.

// // Concepts: String manipulation, Two-pointer technique.

// // Find the longest palindrome in a string.

// // Concepts: Expand around center.

// // Merge two sorted arrays.

// // Concepts: Two-pointer technique, merging.

// // Valid Palindrome.

// // Concepts: Two-pointer technique, string comparison.

// // Backtracking Questions:
// // Generate all subsets of a set.

// // Concepts: Backtracking.

// // Solve the N-Queens problem.

// // Concepts: Backtracking, Recursion.

// // Generate all possible permutations of a list.

// // Concepts: Backtracking.

// // Solve Sudoku.

// // Concepts: Backtracking, recursion.

// // Subset Sum Problem.

// // Concepts: Backtracking, recursion.

// // Greedy Algorithms Questions:
// // Coin Change problem (Min number of coins).

// // Concepts: Greedy algorithm.

// // Activity Selection Problem.

// // Concepts: Greedy algorithm.

// // Job Sequencing Problem.

// // Concepts: Greedy algorithm, sorting.

// // Huffman Coding (Optimal Merge Pattern).

// // Concepts: Greedy algorithm.

// // Fractional Knapsack Problem.

// // Concepts: Greedy algorithm.

// // Phase 3: Patterns (Week 5-6)
// // Key Patterns:
// // Sliding Window

// // Two Pointers

// // Backtracking

// // Greedy Algorithms

// // Recursion

// // Divide and Conquer

// // Dynamic Programming

// // Sliding Window Questions:
// // Find the maximum sum of a subarray of size k.

// // Concepts: Sliding window.

// // Longest substring without repeating characters.

// // Concepts: Sliding window, Hash map.

// // Longest subarray with sum k.

// // Concepts: Sliding window, Hash map.

// // Smallest subarray with sum greater than or equal to k.

// // Concepts: Sliding window.

// // Count of subarrays with sum k.

// // Concepts: Sliding window, Hash map.

// // Two Pointers Questions:
// // Find pairs in an array that sum up to a target value.

// // Concepts: Two pointers, Sorting.

// // Reverse a string using two pointers.

// // Concepts: String manipulation, Two-pointer technique.

// // Find the longest palindrome in a string.

// // Concepts: Expand around center.

// // Merge two sorted arrays.

// // Concepts: Two-pointer technique, merging.

// // Valid Palindrome.

// // Concepts: Two-pointer technique, string comparison.

// // Backtracking Questions:
// // Generate all subsets of a set.

// // Concepts: Backtracking.

// // Solve the N-Queens problem.

// // Concepts: Backtracking, Recursion.

// // Generate all possible permutations of a list.

// // Concepts: Backtracking.

// // Solve Sudoku.

// // Concepts: Backtracking, recursion.

// // Subset Sum Problem.

// // Concepts: Backtracking, recursion.

// // Greedy Algorithms Questions:
// // Coin Change problem (Min number of coins).

// // Concepts: Greedy algorithm.

// // Activity Selection Problem.

// // Concepts: Greedy algorithm.

// // Job Sequencing Problem.

// // Concepts: Greedy algorithm, sorting.

// // Huffman Coding (Optimal Merge Pattern).

// // Concepts: Greedy algorithm.

// // Fractional Knapsack Problem.

// // Concepts: Greedy algorithm.

// // Dynamic Programming Questions:
// // Fibonacci series using DP.

// // Concepts: Memoization, Tabulation.

// // 0/1 Knapsack Problem.

// // Concepts: DP, recursion.

// // Longest Common Subsequence (LCS).

// // Concepts: DP.

// // Coin Change Problem (Minimum number of coins).

// // Concepts: DP, unbounded knapsack.

// // Longest Increasing Subsequence.

// // Concepts: DP, Binary Search (Patience Sorting).

// Absolutely! I'll break down the **logical thinking** problems into a progressive sequence, starting from **easy** questions and gradually increasing the difficulty. This approach will help you build a solid foundation and maximize your understanding as you move to more challenging problems. I’ll focus on **logical problem-solving skills** and **concepts** that are critical for **coding interviews** and **competitive programming**.

// Here’s the roadmap to maximize your logical thinking, starting from **easy** to **hard**, categorized by **concepts**.

// ---

// ### **Phase 1: Foundational Logical Thinking (Weeks 1-2)**

// At the start, you’ll work on simpler problems that focus on basic problem-solving skills, pattern recognition, and efficient use of basic algorithms.

// ---

// #### **1. Arrays & Strings** (Easy to Medium)

// 1. **Find the Maximum and Minimum of an Array**

//    * Problem: Find the largest and smallest element in an array.
//    * **Concepts**: Array traversal, comparison.
//    * **Skills**: Array manipulation, conditional checks.

// 2. **Reverse an Array**

//    * Problem: Reverse the elements of a given array in place.
//    * **Concepts**: Array reversal, swapping elements.
//    * **Skills**: Array manipulation, pointer swapping.

// 3. **Find Duplicates in an Array**

//    * Problem: Find duplicate elements in an array.
//    * **Concepts**: Hashing, Set data structure.
//    * **Skills**: Hashing for fast lookup, traversal.

// 4. **Two Sum**

//    * Problem: Find two numbers in an array that sum up to a target value.
//    * **Concepts**: Hash map for quick lookup.
//    * **Skills**: Hashing, array traversal.

// 5. **String Reversal**

//    * Problem: Reverse a given string without using additional memory.
//    * **Concepts**: String manipulation, in-place operations.
//    * **Skills**: String traversal, two-pointer technique.

// 6. **Palindrome Check**

//    * Problem: Check if a string is a palindrome.
//    * **Concepts**: String manipulation, two-pointer technique.
//    * **Skills**: Iteration, character comparison.

// ---

// #### **2. Basic Recursion & Backtracking** (Easy to Medium)

// 1. **Factorial Calculation**

//    * Problem: Find the factorial of a number using recursion.
//    * **Concepts**: Base case, recursive calls.
//    * **Skills**: Recursion, understanding of recursive stack.

// 2. **Fibonacci Sequence (Memoized)**

//    * Problem: Find the `n`th Fibonacci number using recursion with memoization.
//    * **Concepts**: Memoization, recursion.
//    * **Skills**: Caching results, recursive calls.

// 3. **Subset Sum Problem (Subset of an Array)**

//    * Problem: Find if a subset of numbers in an array adds up to a given sum.
//    * **Concepts**: Recursion, subset generation.
//    * **Skills**: Recursion, understanding of subsets.

// 4. **N-Queens (Small N)**

//    * Problem: Place `n` queens on an `n x n` chessboard so that no two queens threaten each other.
//    * **Concepts**: Backtracking, constraints.
//    * **Skills**: Recursion, exploring possibilities, pruning invalid solutions.

// ---

// ### **Phase 2: Intermediate Logical Thinking (Weeks 3-4)**

// At this stage, we introduce **dynamic programming**, **sorting**, **greedy algorithms**, and more advanced backtracking to improve your **problem-solving skills** and **logical reasoning**.

// ---

// #### **1. Dynamic Programming (DP)** (Medium)

// 1. **Fibonacci Series (Tabulation)**

//    * Problem: Compute the `n`th Fibonacci number iteratively.
//    * **Concepts**: Dynamic Programming, tabulation.
//    * **Skills**: Bottom-up approach, state transitions.

// 2. **Knapsack Problem (0/1)**

//    * Problem: Given weights and values of items, find the maximum value that can be carried in a knapsack of fixed capacity.
//    * **Concepts**: Dynamic programming, knapsack DP.
//    * **Skills**: Table filling, decision-making.

// 3. **Longest Common Subsequence (LCS)**

//    * Problem: Find the longest subsequence that appears in both strings.
//    * **Concepts**: Dynamic programming, string matching.
//    * **Skills**: Table-based DP solution, recursion.

// 4. **Coin Change Problem (Minimum Coins)**

//    * Problem: Find the minimum number of coins required to make a given amount.
//    * **Concepts**: DP, coin change variation.
//    * **Skills**: Bottom-up approach, state space optimization.

// 5. **Longest Increasing Subsequence**

//    * Problem: Given an array, find the longest strictly increasing subsequence.
//    * **Concepts**: DP, binary search.
//    * **Skills**: DP-based solution with optimization.

// ---

// #### **2. Greedy Algorithms** (Medium to Hard)

// 1. **Activity Selection Problem**

//    * Problem: Given a set of activities with start and finish times, select the maximum number of non-overlapping activities.
//    * **Concepts**: Greedy approach, sorting.
//    * **Skills**: Greedy choice, sorting based on finish times.

// 2. **Fractional Knapsack**

//    * Problem: Given weights and values of items, maximize the value by picking items in fractions.
//    * **Concepts**: Greedy algorithm.
//    * **Skills**: Sorting by value-to-weight ratio, greedy choice.

// 3. **Huffman Coding**

//    * Problem: Construct the optimal prefix code for a set of characters based on their frequencies.
//    * **Concepts**: Greedy approach, priority queues (min-heap).
//    * **Skills**: Priority queue usage, greedy optimization.

// ---

// #### **3. Graph Theory Basics** (Medium)

// 1. **Breadth-First Search (BFS)**

//    * Problem: Implement BFS to traverse a graph or find the shortest path in an unweighted graph.
//    * **Concepts**: Graph traversal, BFS.
//    * **Skills**: Queue-based BFS, distance calculation.

// 2. **Depth-First Search (DFS)**

//    * Problem: Implement DFS to explore a graph or tree.
//    * **Concepts**: Graph traversal, DFS.
//    * **Skills**: Recursive DFS, stack-based DFS.

// 3. **Topological Sort (DFS-based)**

//    * Problem: Perform topological sorting of a directed acyclic graph (DAG).
//    * **Concepts**: DFS, topological sorting.
//    * **Skills**: DFS with backtracking, postorder traversal.

// ---

// ### **Phase 3: Advanced Logical Thinking (Weeks 5-6)**

// At this stage, you’ll be solving **advanced problems** involving **graphs**, **backtracking**, **advanced dynamic programming**, and **optimization problems**. This phase is aimed at improving your logical reasoning and ability to tackle complex problems.

// ---

// #### **1. Advanced Dynamic Programming** (Hard)

// 1. **Word Break Problem**

//    * Problem: Given a string and a dictionary, find if the string can be segmented into a space-separated sequence of dictionary words.
//    * **Concepts**: DP, string matching.
//    * **Skills**: DP with substring checks, space optimization.

// 2. **Palindrome Partitioning**

//    * Problem: Partition a string such that every substring is a palindrome, and return the minimum cuts required.
//    * **Concepts**: DP, palindromes.
//    * **Skills**: DP-based palindrome checking, state transitions.

// 3. **Matrix Chain Multiplication**

//    * Problem: Given a sequence of matrices, find the most efficient way to multiply them.
//    * **Concepts**: DP, matrix multiplication.
//    * **Skills**: DP-based optimization, matrix traversal.

// ---

// #### **2. Backtracking (Advanced)** (Hard)

// 1. **N-Queens Problem (Larger N)**

//    * Problem: Place `n` queens on an `n x n` chessboard in such a way that no two queens threaten each other.
//    * **Concepts**: Backtracking, pruning.
//    * **Skills**: Exploring multiple possibilities, optimizing with pruning.

// 2. **Sudoku Solver**

//    * Problem: Given a partially filled Sudoku board, fill in the missing values.
//    * **Concepts**: Backtracking, constraint propagation.
//    * **Skills**: Recursive backtracking, constraint handling.

// 3. **Combination Sum**

//    * Problem: Find all unique combinations of numbers that sum to a target value.
//    * **Concepts**: Backtracking, pruning.
//    * **Skills**: Recursion, combination generation.

// ---

// #### **3. Graph Theory (Advanced)** (Hard)

// 1. **Dijkstra’s Algorithm**

//    * Problem: Find the shortest path from a source node to all other nodes in a weighted graph.
//    * **Concepts**: Graph theory, shortest path.
//    * **Skills**: Priority queue, greedy approach.

// 2. **Minimum Spanning Tree (Kruskal’s/Prim’s Algorithm)**

//    * Problem: Find the minimum spanning tree of a connected, weighted graph.
//    * **Concepts**: Greedy algorithm, Union-Find (Kruskal), priority queues (Prim).
//    * **Skills**: Disjoint-set operations, greedy optimization.

// 3. **Floyd-Warshall Algorithm**

//    * Problem: Find the shortest paths between all pairs of vertices in a graph.
//    * **Concepts**: Dynamic programming, all-pairs shortest path.
//    * **Skills**: Matrix-based DP, optimization.

// ---

// ### **Phase 4: Master Logical Thinking & Optimization (Weeks 7-8)**

// This phase focuses on highly complex problems, optimization

// techniques, and building solutions that require deep insight and advanced algorithmic thinking.

// 1. **Trapping Rain Water**

//    * Problem: Given an elevation map, compute how much water it can trap after raining.
//    * **Concepts**: Two-pointer technique, dynamic programming.
//    * **Skills**: Optimized DP, space-efficient solutions.

// 2. **Median of Two Sorted Arrays**

//    * Problem: Find the median of two sorted arrays in O(log(min(n, m))) time.
//    * **Concepts**: Binary search, divide and conquer.
//    * **Skills**: Binary search, partitioning.

// 3. **Maximal Rectangle in Binary Matrix**

//    * Problem: Find the largest rectangle containing all 1’s in a binary matrix.
//    * **Concepts**: Dynamic programming, histogram-based approach.
//    * **Skills**: DP optimization, stack-based approach.

// ---

// By following this **progressive roadmap**, you’ll enhance your **logical thinking**, **problem-solving abilities**, and **algorithmic skills**. Each phase will help you build up to the next level while reinforcing your foundational understanding.

// Would you like more details or explanations for specific questions or approaches in the roadmap?

// Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

// const linearSearch = (arr,t) =>{

//     for(let i = 0; i < arr.length; i++){

//         if(arr[i]===t){

//             return i
//         }
//     }
//  return -1
// }

// console.log(linearSearch([1,2,3,4,5],1));

// Write a function to implement linear search to find if a number exists in an unsorted array.

// const Q1 = (arr, t) => {

//     for (const n of arr) {

//         if (n === t) {

//             return true
//         }
//     }

//     return false
// }

// console.log(Q1([34, 7, 23, 32, 5, 62, 1], 23))

// Search for a string in an array of strings using linear search.

// const Q2 = (arr, t) => {

//     for (const s of arr) {

//         if (s === t) {

//             return true
//         }
//     }
//     return false
// }

// console.log(Q2(["apple", "banana", "cherry", "date", "fig", "grape"], "date"))

// console.log(Q3([4, 7, 8, 4, 2, 4, 9], 4))

// Count the number of occurrences of a given element in an unsorted array using linear search.

// const Q4 = (arr, t) => {
//     let count = 0

//     for (const n of arr) {

//         if (n === t) {

//             count++
//         }
//     }
//     return count
// }

// console.log(Q4([5, 3, 9, 3, 5, 7, 3], 3))
// Absolutely! Below are the **additional array and string-related problems** that will help you master essential concepts and algorithms, along with the problems I've previously mentioned. These problems focus on more advanced concepts, such as prefix sums, sliding window, string algorithms, and more.

// ### Additional Array & String Problems to Study

// ---

// ### 1. **Prefix and Suffix Arrays**

// - **Problem**: Calculate the sum of elements in a subarray using a prefix sum array. Given an array of integers, find the sum of elements in the range `[i, j]` using the prefix sum.
//    - **Input**: `arr = [1, 2, 3, 4, 5]`, `i = 1`, `j = 3`
//    - **Output**: `9` (Sum of subarray from index 1 to 3: `[2, 3, 4]`)

// - **Problem**: Given an array of integers, find the product of all elements except the one at index `i` (without using division).
//    - **Input**: `arr = [1, 2, 3, 4]`
//    - **Output**: `[24, 12, 8, 6]`

// ---

// ### 2. **Bit Manipulation**

// - **Problem**: Find the **only non-repeating element** in an array where all others repeat.
//    - **Input**: `arr = [2, 3, 5, 4, 5, 2, 4]`
//    - **Output**: `3`

// - **Problem**: **Count the number of set bits** (1s) in the binary representation of all numbers in the array.
//    - **Input**: `arr = [1, 3, 7]`
//    - **Output**: `5` (Binary: `1 -> 1 bit, 3 -> 2 bits, 7 -> 3 bits`)

// ---

// ### 3. **Sorting Algorithms and Their Applications**

// - **Problem**: Given an array of intervals, **merge all overlapping intervals**.
//    - **Input**: `[[1, 3], [2, 4], [5, 7], [6, 8]]`
//    - **Output**: `[[1, 4], [5, 8]]`

// - **Problem**: **Kth Largest Element in an Array**: Find the kth largest element in an unsorted array without sorting.
//    - **Input**: `arr = [12, 3, 5, 7, 19]`, `k = 2`
//    - **Output**: `12`

// ---

// ### 4. **Longest Common Substring/Subsequence**

// - **Problem**: Find the **Longest Common Substring** of two strings.
//    - **Input**: `str1 = "abcdef"`, `str2 = "zcdemf"`
//    - **Output**: `"cd"`

// - **Problem**: Find the **Longest Common Subsequence** of two strings.
//    - **Input**: `str1 = "abcde"`, `str2 = "ace"`
//    - **Output**: `"ace"`

// ---

// ### 5. **String Compression**

// - **Problem**: **Run-Length Encoding**: Compress a string such that consecutive repeating elements are replaced by the element followed by its count.
//    - **Input**: `"aabbbccdd"`
//    - **Output**: `"a2b3c2d2"`

// - **Problem**: Given a string, **compress it** and return the length of the compressed version.
//    - **Input**: `"aabcccccaaa"`
//    - **Output**: `7` (Compressed: `"a2b1c5a3"`)

// ---

// ### 6. **Anagram Detection**

// - **Problem**: **Check if two strings are anagrams** of each other (ignoring spaces and case).
//    - **Input**: `str1 = "listen"`, `str2 = "silent"`
//    - **Output**: `True`

// - **Problem**: **Group Anagrams**: Given a list of strings, group the anagrams together.
//    - **Input**: `strs = ["eat", "tea", "tan", "ate", "nat", "bat"]`
//    - **Output**: `[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]`

// ---

// ### 7. **Sliding Window**

// - **Problem**: **Longest Substring with At Most K Distinct Characters**: Given a string, find the longest substring that contains at most `k` distinct characters.
//    - **Input**: `s = "eceba"`, `k = 2`
//    - **Output**: `"ece"`

// - **Problem**: **Minimum Window Substring**: Given a string and a pattern, find the smallest substring containing all characters of the pattern.
//    - **Input**: `str = "ADOBECODEBANC"`, `pattern = "ABC"`
//    - **Output**: `"BANC"`

// ---

// ### 8. **String Permutations**

// - **Problem**: **Generate All Permutations** of a string.
//    - **Input**: `"abc"`
//    - **Output**: `["abc", "acb", "bac", "bca", "cab", "cba"]`

// - **Problem**: Given a string, find all **distinct permutations** of that string.
//    - **Input**: `"aab"`
//    - **Output**: `["aab", "aba", "baa"]`

// ---

// ### 9. **Longest Palindromic Substring**

// - **Problem**: Given a string, find the **Longest Palindromic Substring**.
//    - **Input**: `"babad"`
//    - **Output**: `"bab"` or `"aba"`

// - **Problem**: Count all **palindromic substrings** in a given string.
//    - **Input**: `"abc"`
//    - **Output**: `3` (Substrings: `"a", "b", "c"`)

// ---

// ### 10. **String Matching Algorithms**

// - **Problem**: **Pattern Matching**: Given a string and a pattern, determine if the pattern exists in the string using the **Knuth-Morris-Pratt (KMP)** algorithm.
//    - **Input**: `text = "ABABDABACDABABCABAB"`, `pattern = "ABABCABAB"`
//    - **Output**: `True`

// - **Problem**: **Rabin-Karp Algorithm**: Find the occurrences of a substring in a string using hash values.
//    - **Input**: `str = "AABAACAABAA"`, `pattern = "AABA"`
//    - **Output**: `True`

// ---

// ### 11. **Z-Algorithm**

// - **Problem**: **Pattern Matching using Z-Algorithm**: Find all occurrences of a pattern in a string using the Z-algorithm.
//    - **Input**: `str = "abcabcabc"`, `pattern = "abc"`
//    - **Output**: `[0, 3, 6]`

// ---

// ### 12. **Matrix Representation (for Strings)**

// - **Problem**: **Word Search in a 2D grid**: Given a 2D grid of characters, find if a word exists in the grid by traversing in all 8 directions.
//    - **Input**: `grid = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]`, `word = "ABCCED"`
//    - **Output**: `True`

// - **Problem**: **String Matching in a 2D Array**: Search for a pattern string in a 2D character matrix.
//    - **Input**: `grid = [["A", "B", "C", "D"], ["E", "F", "G", "H"], ["I", "J", "K", "L"]]`, `word = "CFG"`
//    - **Output**: `True`

// ---

// ### 13. **Subarray Problems with Specific Conditions**

// - **Problem**: Find the **maximum sum subarray** in an array using **Kadane’s Algorithm**.
//    - **Input**: `arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]`
//    - **Output**: `6` (Subarray: `[4, -1, 2, 1]`)

// - **Problem**: **Subarray with Sum Equals Zero**: Find the longest subarray with a sum of `0`.
//    - **Input**: `arr = [1, 2, -3, 3, 1]`
//    - **Output**: `4` (Subarray: `[2, -3, 3, 1]`)

// ---

// ### 14. **String Transformations**

// - **Problem**: **Edit Distance**: Find the minimum number of operations (insertions, deletions, substitutions) required to convert one string to another.
//    - **Input**: `str1 = "kitten"`, `str2 = "sitting"`
//    - **Output**: `3`

// - **Problem**: **String Rotation**: Check if one string is a rotation of another string.
//    - **Input**: `str1 = "abcde"`, `str2 = "deabc"`
//    - **Output**: `True`

// ---

// ### 15. **Array Partitioning & Balancing**

// - **Problem**: **Partition Equal Subset Sum**: Given a set of numbers, determine if it can be partitioned into two subsets with equal sum.
//    - **Input**: `arr = [1, 5, 11, 5]`
//    - **Output**: `True`

// - **Problem**: **Rearrange Array** to alternate even and odd numbers, maintaining relative order.
//    - **Input**: `arr = [1, 2, 3, 4, 5]`
//    - **Output**: `[2, 1, 4, 3, 5]`

// ---

// ### Conclusion:
// These additional problems, along with the previous ones, cover a broad range of array and string-related concepts and algorithms. By practicing these, you’ll improve both your theoretical understanding and hands-on coding skills in solving array and string problems effectively. Keep challenging yourself with these problems to become proficient in working with arrays and strings!

// 1. Array Rotation
// Problem: Rotate an array arr of size n to the right by k steps. Write your own implementation without using any built-in methods like splice() or reverse().
// Input: Array [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3]
// Hint: Think of the array as a circular structure to solve this.

// 2. Find the Missing Number
// Problem: You are given an array of integers from 1 to n. There is exactly one missing number. Find the missing number without using any built-in methods or extra space.
// Input: [1, 2, 4, 6, 3, 7, 8]
// Output: 5
// 3. First Non-Repeating Character in String
// Problem: Write a function that returns the first non-repeating character in a string. Do this without using any built-in JavaScript string functions like indexOf().
// Input: "geeksforgeeks"
// Output: "f"
// 4. Move Zeros to the End
// Problem: Given an array, move all the zeros to the end without using any built-in methods like filter(). Maintain the relative order of non-zero elements.
// Input: [0, 1, 2, 0, 3, 4]
// Output: [1, 2, 3, 4, 0, 0]
// 5. Find the Pair with the Largest Product
// Problem: Given an array of integers, find two numbers such that their product is the largest possible. Do this without using sorting or any built-in methods.
// Input: [1, 2, 3, 4, 5]
// Output: 20 (Pair: 4 and 5)
// 6. Check if an Array is a Subarray of Another Array
// Problem: Given two arrays, check if one array is a subarray of another. Implement it without using built-in functions like includes().
// Input: arr1 = [1, 2, 3], arr2 = [2, 3]
// Output: True
// 7. Longest Subarray with Sum Zero
// Problem: Given an array of integers, find the length of the longest subarray with a sum of 0.
// Input: [1, 2, -3, 3, 1]
// Output: 4 (Subarray [2, -3, 3, 1])
// 8. Array with All Unique Elements
// Problem: Given an array, return true if all elements in the array are unique, and false otherwise. Do this without using a hash map or Set.
// Input: [1, 2, 3, 4]
// Output: true
// 9. Intersection of Two Arrays
// Problem: Find the intersection of two arrays without using filter() or includes().
// Input: [1, 2, 2, 1], [2, 2]
// Output: [2]
// 10. Sort an Array Without Using Built-in Methods
// Problem: Implement a sorting algorithm (like bubble sort or selection sort) to sort an array without using any built-in sorting methods.
// Input: [5, 2, 9, 1, 5, 6]
// Output: [1, 2, 5, 5, 6, 9]
// 11. Sum of Two Numbers in an Array
// Problem: Given an array of integers and a target sum, determine if there are two distinct numbers in the array that add up to the target. Implement this without using indexOf() or any built-in methods.
// Input: [3, 4, 2, 7, 1], target = 10
// Output: true (Pair: 3 + 7)
// 12. Array Compression
// Problem: Given an array of numbers, compress the array such that each consecutive repeating element is represented by a single element followed by the count. For example, [1, 1, 2, 3, 3, 3, 4] should be compressed to [1, 2, 2, 1, 3, 3, 4, 1].
// Input: [1, 1, 2, 3, 3, 3, 4]
// Output: [1, 2, 2, 1, 3, 3, 4, 1]
// 13. Find the Longest Palindromic Substring
// Problem: Find the longest palindromic substring in a given string. Do this without using built-in string methods such as split(), reverse(), or substring().
// Input: "babad"
// Output: "bab" or "aba"
// 14. Trapping Rain Water
// Problem: Given an array representing the heights of bars in a histogram, calculate how much water can be trapped between the bars after raining. Do this without using any extra space for the result array.
// Input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// Output: 6 units of water
// 15. Find the Longest Consecutive Sequence
// Problem: Given an unsorted array of integers, find the length of the longest consecutive elements sequence. Do this without using any extra space.
// Input: [100, 4, 200, 1, 3, 2]
// Output: 4 (Sequence: 1, 2, 3, 4)
// 16. Find the Majority Element
// Problem: Given an array of size n, find the majority element (element that appears more than n/2 times). Do this without using any extra space.
// Input: [3, 3, 4, 2, 4, 4, 2, 4, 4]
// Output: 4
// 17. Reverse Words in a String
// Problem: Given a string, reverse the order of words in the string without using built-in string manipulation methods.
// Input: "The quick brown fox"
// Output: "fox brown quick The"
// These problems will give you a wide range of challenges, focusing on both logical thinking and manual implementation, without relying on built-in methods. By practicing these, you will improve your ability to think through complex problems and implement solutions efficiently.


// You said:
// give me more if you  think its importand pattern to study
// ChatGPT said:
// ChatGPT
// Absolutely! Here are some additional problems that will deepen your understanding of important patterns, enhance your problem-solving skills, and push your logical thinking to the next level. These problems focus on essential concepts and patterns that will help you handle a wide range of array and string challenges.

// 18. Find All Pairs in an Array that Sum to a Target
// Problem: Given an array of integers and a target sum, find all pairs of numbers in the array that add up to the target sum. Do this without using any built-in methods like includes().
// Input: [1, 2, 3, 4, 5], target = 6
// Output: [[1, 5], [2, 4]]
// Hint: This requires a two-pointer or hash map-based solution, but without using hash maps directly.

// 19. Find All Triplets in an Array that Sum to a Target
// Problem: Given an array of integers and a target sum, find all unique triplets in the array that sum up to the target. Do not use any extra space for the result and avoid using sorting methods.
// Input: [1, 2, 3, 0, -1, -2, 1], target = 0
// Output: [[-2, 1, 1], [-1, 0, 1]]
// Hint: This involves checking combinations of three elements, using two pointers or sliding window technique.

// 20. Find the Missing Number in a Sequence
// Problem: Given an array of numbers where one number from 1 to n is missing, find the missing number. Do this without using any extra space or built-in sorting methods.
// Input: [3, 1, 2, 5], n = 5
// Output: 4
// Hint: Try using the sum of the first n natural numbers.

// 21. Product of All Except the Current Element
// Problem: Given an array, return a new array such that each element at index i is the product of all the numbers in the original array except the one at i. Do this without using division and without using any extra space except the result array.
// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
// 22. Longest Increasing Subsequence
// Problem: Find the length of the longest strictly increasing subsequence in an array. Do this without sorting or using any built-in methods like sort().
// Input: [10, 22, 9, 33, 21, 50, 41, 60, 80]
// Output: 6 (Longest Increasing Subsequence: [10, 22, 33, 50, 60, 80])
// 23. Find the Kth Largest Element in an Array
// Problem: Find the kth largest element in an unsorted array without using sorting methods or extra space.
// Input: [12, 3, 5, 7, 19], k = 2
// Output: 12
// 24. Count Inversions in an Array
// Problem: Given an array, count the number of inversions. An inversion is a pair of indices i and j such that i < j and arr[i] > arr[j].
// Input: [2, 4, 1, 3, 5]
// Output: 3 (Inversions: (2, 1), (4, 1), (4, 3))
// Hint: This problem can be solved by a modified merge sort.

// 25. Find the Longest Subarray of Distinct Elements
// Problem: Given an array of integers, find the length of the longest subarray with distinct elements.
// Input: [1, 2, 3, 1, 2, 3, 4]
// Output: 4 (Subarray: [1, 2, 3, 4])
// 26. Check if Array is Sorted and Rotated
// Problem: Given an array, check whether it is sorted and rotated. An array is sorted and rotated if you can rotate a sorted array at some point to form the given array.
// Input: [3, 4, 5, 1, 2]
// Output: True
// 27. Minimum Number of Jumps to Reach End of Array
// Problem: Given an array of integers where each element represents the maximum number of steps that can be made forward from that element, find the minimum number of jumps to reach the end.
// Input: [6, 2, 4, 0, 5, 1, 1, 4, 2, 9]
// Output: 2 (Jump from 6 to 5 and then from 5 to 9)
// 28. Find the Missing Number from an Array with No Duplicates
// Problem: Given an array of size n-1 containing unique elements from 1 to n, find the missing number without using extra space.
// Input: [1, 2, 4, 5], n = 5
// Output: 3
// Hint: Sum-based or XOR-based solution.

// 29. Smallest Subarray with a Sum Greater than or Equal to K
// Problem: Given an array of positive integers and a number k, find the smallest subarray with a sum greater than or equal to k. Return the length of this subarray.
// Input: [1, 4, 45, 6, 0, 19], k = 51
// Output: 3 (Subarray: [4, 45, 6])
// 30. Merge Intervals
// Problem: Given a collection of intervals, merge all overlapping intervals. Do this without using built-in sorting or interval merging methods.
// Input: [[1, 3], [2, 4], [5, 7], [6, 8]]
// Output: [[1, 4], [5, 8]]
// 31. Find All Unique Substrings of a String
// Problem: Given a string, find all unique substrings of the string.
// Input: "abc"
// Output: ["a", "ab", "abc", "b", "bc", "c"]
// Hint: Use sliding window or brute-force combination generation.

// 32. Max Consecutive 1’s in a Binary Array
// Problem: Given a binary array, find the length of the longest sequence of consecutive 1s.
// Input: [1, 1, 0, 1, 1, 1]
// Output: 3
// 33. Find All Permutations of a String
// Problem: Find all possible permutations of a given string. Avoid using built-in functions like permutation().
// Input: "abc"
// Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
// 34. Rotate Matrix (90 degrees)
// Problem: Rotate an n x n matrix by 90 degrees clockwise. Do this without using any extra space for a new matrix.
// Input:
// csharp
// Copy
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// Output:
// csharp
// Copy
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]
// 35. Maximum Product Subarray
// Problem: Given an integer array, find the contiguous subarray (containing at least one number) that has the largest product and return its product.
// Input: [2, 3, -2, 4]
// Output: 6 (Subarray: [2, 3])
