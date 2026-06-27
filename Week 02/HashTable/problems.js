//Find Duplicate Characters in a String
const findDuplicateCharactersInString = (string) => {
  const map = new Map();
  const duplicates = [];

  for (let char of string) {
    if (!map.get(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char)+1);
    }
  }

  for (let [key, value] of map) {
    if (value > 1) {
      duplicates.push(key);
    }
  }

  return duplicates;
};

console.log(
  "Duplicates in the given string",
  findDuplicateCharactersInString("NithinKS".toLocaleLowerCase())
);

//check a string contains duplicates
const checkForDuplicates = (string) => {
  const map = new Map();

  for (let s of string) {
    if (map.has(s)) {
      map.set(s, true);
    } else {
      map.set(s, false);
    }
  }

  return map;
};

console.log("does it contain duplicates", checkForDuplicates("Nithinks".toLocaleLowerCase()));

//two sum



//  You’re given a list of string, and you need to group anagrams together.

const groupAnagrams = (strs) => {
  const map = new Map();

  for (let str of strs) {
    const sorted = str.split("").sort().join("");
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }

  return Array.from(map.values());
};

// Give an array of integers, find the k most frequent elements.

topKFrequent = function (nums, k) {
  const map = new Map();

  for (let n of nums) {
    if (!map.has(n)) {
      map.set(n, 1);
    } else {
      map.set(n, map.get(n) + 1);
    }
  }

  let array = Array.from(map.entries());

  let sorted = array.sort((a, b) => b[1] - a[1]);
  let result = [];
  let i = 0;
  while (i < k) {
    result.push(sorted[i][0]);
    i++;
  }

  return result;
};

