// Task: Create a JavaScript function that takes an array of numbers and returns the median value.
// The function should handle both odd and even-length arrays. 
// Test the function with various arrays to ensure it works correctly.

function findMedian(numbers) {
  // Sort the array in ascending order
  const sortedNumbers = [...numbers].sort((a, b) => a - b);

  const length = sortedNumbers.length;

  // If the array length is odd, return the middle value
  if (length % 2 !== 0) {
      return sortedNumbers[Math.floor(length / 2)];
  }

  // If the array length is even, return the average of the two middle values
  const mid1 = sortedNumbers[length / 2 - 1];
  const mid2 = sortedNumbers[length / 2];
  return (mid1 + mid2) / 2;
}

// Test the function with various arrays
console.log(findMedian([7, 3, 5, 1, 9])); // Odd-length array, Output: 5
console.log(findMedian([10, 2, 4, 6]));    // Even-length array, Output: 5
console.log(findMedian([12, 3, 7, 5, 8])); // Odd-length array, Output: 7
console.log(findMedian([1, 2, 3, 4, 5, 6])); // Even-length array, Output: 3.5
