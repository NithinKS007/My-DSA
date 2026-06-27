// Find the Intersection of Two Arrays
const intersection = (nums1, nums2) => {
  const set = new Set(nums1); // Convert nums1 to a Set to remove duplicates
  const result = [];

  for (const num of nums2) {
    if (set.has(num)) {
      result.push(num);
      set.delete(num); // To ensure each element appears only once in the result
    }
  }

  return result;
};
console.log(intersection([1, 2, 33, 2, 5], [112, 2, 33, 2, 55]));

// Two Sum
const twoSum = (arr, target) =>{
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(arr[i], i);
  }

  return null;
}

console.log("Two sum", twoSum([2, 7, 11, 15], 9));