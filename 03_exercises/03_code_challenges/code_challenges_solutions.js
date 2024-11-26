/*
____________________________
1. Palindrome Permutation
Write a function to check if a given string can be rearranged to form a palindrome.
-> A palindrome is a word, phrase, number, or sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
-> e.g. "radar", "level", "madam"
*/
function canFormPalindrome(str) {
    // Create a frequency map to count character occurrences
    const charCount = {};

    for (const char of str) {
        if (char !== ' ') { // Ignore spaces
            const lowerChar = char.toLowerCase(); // Case-insensitive
            charCount[lowerChar] = (charCount[lowerChar] || 0) + 1;
        }
    }

    // Check the number of characters with odd frequencies
    let oddCount = 0;
    for (const count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            oddCount++;
        }
        // A palindrome can have at most one character with an odd frequency
        if (oddCount > 1) {
            return false;
        }
    }

    return true;
}


// Example usage:
console.log(canFormPalindrome("civic")); // true
console.log(canFormPalindrome("ivicc")); // true
console.log(canFormPalindrome("hello")); // false
console.log(canFormPalindrome("racecar")); // true
console.log(canFormPalindrome("aabbccdd")); // true

/* Note: This exercise is not about checking if something is a Palindrome but to check if a string can be rearranged into a Palindrome ;)
How it works:
    1. Frequency Map: The function first counts the occurrences of each character using a frequency map (charCount).
    2. Odd Frequencies: A string can be rearranged into a palindrome if it has at most one character with an odd count.
        For example:
            "civic" has 0 odd-count characters.
            "ivicc" has 1 odd-count character ('i').
            "hello" has 3 odd-count characters, so it can't be rearranged into a palindrome.
    3. Ignore Spaces: Spaces are ignored to handle sentences or phrases (e.g., "taco cat").

____________________________
2. Array Flattening
Write a recursive function to flatten a nested array.
-> To flatten a nested array means to take an array that contains other arrays (potentially at multiple levels of nesting) and convert it into a single-level array where all elements are at the same level.
*/
function flattenArray(arr) {
    let result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            // Recursively flatten nested arrays
            result = result.concat(flattenArray(item));
        } else {
            // Add non-array items directly to the result
            result.push(item);
        }
    }
    return result;
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6, [7, [8, [9]]]];
console.log(flattenArray(nestedArray));
/* Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


How It Works:
    1. Base Case: If the element is not an array, it's directly added to the result.
    2. Recursive Case: If the element is an array, the function calls itself on that array and concatenates the result.
    3. Combining Results: Each recursive call appends its flattened elements to the final result array.
This approach handles arbitrarily deep nesting and provides a clean, recursive solution.

____________________________
3. Find Unique Triplets
Find all unique triplets in an array that sum to zero.
-> Identify groups of three numbers from the array that, when added together, result in a sum of zero
*/
function findTriplets(nums) {
    const results = [];
    nums.sort((a, b) => a - b); // Sort the array to simplify finding duplicates

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate elements for the first number
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]]);

                // Move left and right pointers while avoiding duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++; // Increase the sum by moving the left pointer
            } else {
                right--; // Decrease the sum by moving the right pointer
            }
        }
    }

    return results;
}

// Example usage:
const nums = [-1, 0, 1, 2, -1, -4];
console.log(findTriplets(nums));
/* Output: [[-1, -1, 2], [-1, 0, 1]]


How It Works:
    1. Sort the Array:
        Sorting helps in handling duplicates and enables the two-pointer technique efficiently.
    2. Outer Loop:
        Iterate through the array with the first pointer (i) while skipping duplicate elements.
    3. Two Pointers:
        Use two pointers (left and right) to find pairs that sum up to -nums[i].
    4. Avoid Duplicates:
        Skip consecutive duplicates for left and right to ensure unique triplets.
    5. Add to Results:
        If a triplet is found, it's added to the result array.

Complexity:
Time Complexity: O(n2)O(n2), since we use a nested loop with the two-pointer approach.
Space Complexity: O(k)O(k), where kk is the number of unique triplets found.

____________________________
4. Validate Parentheses
Validate whether a string of parentheses is balanced.
-> Balanced means that on every opening piece there is a closing one too.
*/
function isValidParentheses(s) {
    const stack = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of s) {
        if (['(', '[', '{'].includes(char)) {
            // Push opening brackets to the stack
            stack.push(char);
        } else if ([')', ']', '}'].includes(char)) {
            // Check if the stack has a matching opening bracket
            if (stack.pop() !== map[char]) {
                return false; // Mismatch found
            }
        }
    }

    // If the stack is empty, all parentheses are balanced
    return stack.length === 0;
}

// Example usage:
console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("([)]")); // false
console.log(isValidParentheses("{[]}")); // true
/*
How It Works:
    1. Stack for Tracking:
        - Use a stack to track opening brackets ((, [, {).
        - Push opening brackets onto the stack.
        - For closing brackets (), ], }), pop from the stack and check if it matches the expected opening bracket.
    2. Mapping Brackets:
        - A mapping object (map) pairs closing brackets to their corresponding opening brackets.
    3. Mismatch or Extra Characters:
        - If a mismatch is found or if the stack isn't empty at the end, the string is not balanced.
    4. Return Result:
        - Return true if all parentheses are balanced, otherwise return false.

Complexity:
Time Complexity: O(n)O(n), where nn is the length of the string.
Space Complexity: O(n)O(n), due to the stack.

____________________________
5. Spiral Matrix
Given a 2D array, return its elements in spiral order.
-> Spiral order: starting from the top-left corner and moving outward in a clockwise direction. The traversal typically follows this sequence:
*/
function spiralOrder(matrix) {
    const result = [];
    if (matrix.length === 0) return result;

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Traverse from top to bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Traverse from right to left (if there's a row remaining)
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Traverse from bottom to top (if there's a column remaining)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(spiralOrder(matrix));
/* Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

How It Works:
    1. Boundaries:
        Define four boundaries: top, bottom, left, and right to track the current layer of the matrix.
    2. Traversal:
        Traverse in four directions: left-to-right, top-to-bottom, right-to-left, and bottom-to-top, while adjusting the boundaries after each pass.
    3. Conditions:
        Ensure the boundaries are checked (top <= bottom and left <= right) to prevent unnecessary traversal or duplication.
    4. Result Accumulation:
        Push the visited elements into the result array.

Complexity:
Time Complexity: O(m×n)O(m×n), where mm is the number of rows and nn is the number of columns, since every element is visited once.
Space Complexity: O(1)O(1), additional space aside from the result array.

____________________________
6.  Isomorphic Strings
Write a function to determine if two strings are isomorphic. Two strings are isomorphic if the characters in one string can be replaced to get the second string, maintaining the order.
-> isomorphic: there is a one-to-one mapping between the elements of the two structures, preserving their relationships or patterns.
   Two strings are isomorphic if:
    1. Characters in one string can be replaced to get the other string.
    2. The mapping between characters is consistent.
*/
function areIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    const mapS = new Map();
    const mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // Check if there's already a mapping for charS in s
        if (mapS.has(charS)) {
            if (mapS.get(charS) !== charT) return false;
        } else {
            mapS.set(charS, charT);
        }

        // Check if there's already a mapping for charT in t
        if (mapT.has(charT)) {
            if (mapT.get(charT) !== charS) return false;
        } else {
            mapT.set(charT, charS);
        }
    }

    return true;
}

// Example usage:
console.log(areIsomorphic("egg", "add")); // true
console.log(areIsomorphic("foo", "bar")); // false
console.log(areIsomorphic("paper", "title")); // true
console.log(areIsomorphic("ab", "aa")); // false
/*
How It Works:
    1. Map Characters:
       Use two maps (mapS for s → t mapping and mapT for t → s mapping) to track the character replacements.
    2. Consistency Check:
       For each character in the strings:
          If s[i] already maps to something in mapS, ensure it maps to t[i].
          If t[i] already maps to something in mapT, ensure it maps to s[i].
    3. Mismatch Handling:
       If any mismatch is found, return false.
    4- Equal Length Check:
        If the strings are not of equal length, return false immediately.

Complexity:
Time Complexity: O(n)O(n), where nn is the length of the strings, as we iterate through the strings once.
Space Complexity: O(n)O(n), due to the two maps used for tracking the mappings.


____________________________
7. Unique Character in a String
Write a function to find the first non-repeating character in a string. If all characters repeat, return null.
*/
function firstUniqueChar(str) {
    const charCount = new Map();

    // Count occurrences of each character
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Find the first character with a count of 1
    for (const char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }

    // If no unique character exists
    return null;
}

// Example usage:
console.log(firstUniqueChar("leetcode")); // "l"
console.log(firstUniqueChar("loveleetcode")); // "v"
console.log(firstUniqueChar("aabbcc")); // null
/*
How It Works:
    1. Character Count:
        Use a Map to store the frequency of each character in the string.
    2. Find the First Unique Character:
        Iterate through the string again to check which character has a frequency of 1 in the Map.
    3. Return null if All Characters Repeat:
        If no unique character is found, return null.

Complexity:
Time Complexity: O(n)O(n), where nn is the length of the string.
   First pass to count characters.
   Second pass to find the first unique character.
Space Complexity: O(k)O(k), where kk is the number of unique characters in the string (space for the Map).


____________________________
8. Frequency Counter
Given an array, write a function to count the frequency of each element and return an object.
*/
function countFrequencies(arr) {
    const frequencyCounter = {};

    for (const element of arr) {
        frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
    }

    return frequencyCounter;
}

// Example usage:
console.log(countFrequencies([1, 2, 2, 3, 3, 3]));
// Output: { '1': 1, '2': 2, '3': 3 }

console.log(countFrequencies(["a", "b", "a", "c", "b", "a"]));
// Output: { 'a': 3, 'b': 2, 'c': 1 }

/*
How It Works:
   1. Iterate Through the Array:
        For each element in the array, check if it already exists as a key in the frequencyCounter object.
   2. Increment Count:
        If the key exists, increment its value by 1.
        If not, initialize it with a value of 1.
   3. Return the Object:
        After processing all elements, return the frequencyCounter object.

Complexity:
Time Complexity: O(n)O(n), where nn is the number of elements in the array (single traversal of the array).
Space Complexity: O(k)O(k), where kk is the number of unique elements in the array (space for the frequencyCounter object).


____________________________
9. Anagram Check
Write a function to check if two strings are anagrams of each other.
-> An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once. 
The rearrangement must result in a valid word or phrase.
Examples of Anagrams:
    - "listen" → "silent"
    - "earth" → "heart"
    - "evil" → "vile"
*/
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    const charCount = {};

    // Count characters in the first string
    for (const char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract character counts using the second string
    for (const char of str2) {
        if (!charCount[char]) return false; // Character not found or count mismatch
        charCount[char]--;
    }

    return true;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));  // false
console.log(areAnagrams("anagram", "nagaram")); // true
console.log(areAnagrams("rat", "car")); // false
/*
How It Works:
    1. Length Check:
        If the two strings have different lengths, they cannot be anagrams.
    2. Character Count:
        Use an object (charCount) to count the occurrences of each character in the first string.
    3. Verify Counts:
        For each character in the second string, decrement its count in charCount.
        If a character in str2 doesn’t exist in charCount or its count goes below zero, the strings are not anagrams.
    4. Return True:
        If all counts match after processing both strings, they are anagrams.

Complexity:
Time Complexity: O(n)O(n), where nn is the length of the strings.
Space Complexity: O(k)O(k), where kk is the number of unique characters in the strings (space for the charCount object).


____________________________
10. Chunk an Array
Write a function to split an array into chunks of a given size.
*/
function chunkArray(array, size) {
    if (size <= 0) throw new Error("Chunk size must be greater than 0.");

    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }

    return result;
}

// Example usage:
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
// Output: [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunkArray([1, 2, 3, 4, 5], 3));
// Output: [[1, 2, 3], [4, 5]]
console.log(chunkArray([1, 2, 3], 1));
/* Output: [[1], [2], [3]]
How It Works:
    1. Step Through the Array:
        Iterate through the array in increments of size.
    2. Extract Chunks:
        Use the slice method to extract subarrays of the specified size and push them into the result array.
    3. Handle Remaining Elements:
        If the total number of elements is not a multiple of size, the last chunk will contain the remaining elements.
    4. Error Handling:
        If the size is less than or equal to 0, an error is thrown to ensure valid input.

Complexity:
Time Complexity: O(n)O(n), where nn is the number of elements in the array (each element is processed once).
Space Complexity: O(k)O(k), where kk is the number of chunks (space for the result array).


____________________________
11. Flatten an Object
Write a function to flatten a nested object into a single-level object, with keys representing the nested path.
*/
function flattenObject(obj, parentKey = '', result = {}) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                // Recursively flatten nested objects
                flattenObject(obj[key], newKey, result);
            } else {
                // Assign values to the result object
                result[newKey] = obj[key];
            }
        }
    }
    return result;
}

// Example usage:
const nestedObject = {
    a: {
        b: {
            c: 1,
            d: 2,
        },
        e: 3,
    },
    f: 4,
};

console.log(flattenObject(nestedObject));
// Output:
// {
//   "a.b.c": 1,
//   "a.b.d": 2,
//   "a.e": 3,
//   "f": 4
// }
/*
How It Works:
    1. Recursive Traversal:
        Iterate through each key in the object.
        If a value is another object, recursively call flattenObject, appending the current key to the parentKey.
    2. Concatenate Keys:
        Construct new keys using the dot (.) notation to represent the path in the nested object.
    3. Assign Values:
        If the value is not an object (or is null or an array), assign it to the result object.
    4. Base Case:
        When there are no more nested objects, return the result.

Key Considerations:
Arrays: This implementation skips array handling for simplicity. You can customize it to support array indexing if needed.
Null Values: Handles null as a non-object value.

Complexity:
Time Complexity: O(n)O(n), where nn is the total number of keys in the nested object.
Space Complexity: O(k)O(k), where kk is the number of unique keys in the flattened object.


____________________________
12. Remove Duplicates from an Array
Write a function that removes duplicate elements from an array.
*/

//Using Set (Simple and Efficient)

function removeDuplicates(array) {
    return [...new Set(array)];
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(["a", "b", "a", "c", "b"]));
/* Output: ["a", "b", "c"]

Explanation:
    1. Set:
        A Set automatically removes duplicate values, as it only stores unique values.
    2. Spread Operator (...):
        Converts the Set back into an array.
*/

// Using a Loop (Manual Method)
function removeDuplicatesLoop(array) {
    const unique = [];
    for (const item of array) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }
    return unique;
}

// Example usage:
console.log(removeDuplicatesLoop([1, 2, 2, 3, 4, 4, 5]));
/* Output: [1, 2, 3, 4, 5]

Explanation:
    1. Iterate Through the Array:
       Use a for loop to check each element.
    2. Check for Uniqueness:
        Add the element to a unique array only if it's not already present.

Complexity:
    Using Set:
        Time Complexity: O(n)O(n), since adding elements to a Set is generally O(1)O(1) and we iterate through the array once.
        Space Complexity: O(n)O(n), for storing unique elements.
    Using a Loop:
        Time Complexity: O(n2)O(n2), due to the includes method inside the loop.
        Space Complexity: O(n)O(n), for storing unique elements.

The Set-based approach is the preferred method for its simplicity and efficiency.


____________________________
13. Find Missing Numbers
Given an array of numbers from 1 to N with some missing numbers, find all the missing numbers.
*/
function findMissingNumbers(arr, N) {
    const fullSet = new Set(Array.from({ length: N }, (_, i) => i + 1));
    const givenSet = new Set(arr);

    // Subtract givenSet from fullSet to find missing numbers
    const missing = [...fullSet].filter(num => !givenSet.has(num));
    return missing;
}

// Example usage:
console.log(findMissingNumbers([1, 2, 4, 6], 6)); // [3, 5]
console.log(findMissingNumbers([3, 7, 1, 2, 8, 4, 5], 8)); // [6]
console.log(findMissingNumbers([], 5)); // [1, 2, 3, 4, 5]
console.log(findMissingNumbers([1, 2, 3, 4, 5], 5)); // []

/*
How It Works:
    1. Create a Full Set:
        Use Array.from to generate a full list of numbers from 1 to N.
        Convert this list into a Set for efficient lookups.
    2. Filter Missing Numbers:
        Use filter to find numbers in the full set that are not in the given array (represented by givenSet).
    3. Return the Missing Numbers:
        The result is the array of missing numbers.

Complexity:
Time Complexity:
    O(N)O(N) to generate the full range.
    O(n)O(n) to iterate through the given array and check membership.
    Overall: O(N+n)O(N+n), where NN is the size of the full range, and nn is the size of the given array.
Space Complexity:
    O(N)O(N), for the full set and intermediate storage.

Alternate Solution (Without Sets):
If N is very large and memory optimization is critical, you can use a mathematical approach:
*/

function findMissingNumbersAlt(arr, N) {
    const fullArray = Array.from({ length: N }, (_, i) => i + 1);
    return fullArray.filter(num => !arr.includes(num));
}

// Example usage:
console.log(findMissingNumbersAlt([1, 2, 4, 6], 6)); // [3, 5]

/* While simpler, this method has worse time complexity due to repeated calls to includes, making it O(N×n)O(N×n). Use the Set-based approach for better performance.


____________________________
14. Longest Substring Without Repeating Characters
Write a function to find the length of the longest substring without repeating characters.
*/
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let charSet = new Set();
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        // If the character already exists, slide the left pointer
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        // Add the current character to the set
        charSet.add(s[right]);
        // Update the maximum length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // 3 ("wke")
console.log(lengthOfLongestSubstring("")); // 0

/*
How It Works:

    1. Sliding Window:
        Use two pointers (left and right) to create a "window" in the string.
        charSet keeps track of characters in the current window.
    2. Expand Window:
        Move the right pointer to add characters to the window.
    3. Shrink Window:
        If a character is repeated, move the left pointer to remove characters from the window until the repeated character is removed.
    4. Track Maximum Length:
        After adjusting the window, calculate the length of the current substring and update maxLength if necessary.
Complexity:
Time Complexity: O(n)O(n), where nn is the length of the string. Each character is processed at most twice (once added and once removed).
Space Complexity: O(k)O(k), where kk is the size of the character set (e.g., 26 for lowercase English letters).

This approach is efficient and works well even for longer strings.


____________________________
15. Merge and Sort Two Arrays
Write a function to merge two arrays and return a sorted array with unique values.
*/
function mergeAndSortArrays(arr1, arr2) {
    // Merge the arrays and use Set to remove duplicates
    const mergedArray = [...new Set([...arr1, ...arr2])];

    // Sort the merged array
    return mergedArray.sort((a, b) => a - b);
}

// Example usage:
console.log(mergeAndSortArrays([1, 3, 5], [2, 3, 4, 5]));
// Output: [1, 2, 3, 4, 5]
console.log(mergeAndSortArrays([10, 20, 30], [5, 15, 25, 30]));
// Output: [5, 10, 15, 20, 25, 30]
console.log(mergeAndSortArrays([], [1, 2, 3]));
// Output: [1, 2, 3]
console.log(mergeAndSortArrays([1, 1, 1], [2, 2, 2]));
/* Output: [1, 2]

How It Works:
    1. Merge Arrays:
        Use the spread operator (...) to merge arr1 and arr2 into a single array.
    2. Remove Duplicates:
        Use Set to automatically eliminate duplicate values, as Set only keeps unique elements.
    3. Sort the Array:
        Use Array.prototype.sort to sort the merged array in ascending order.

Complexity:
Time Complexity:
    Merging arrays: O(n+m)O(n+m), where nn and mm are the sizes of arr1 and arr2.
    Removing duplicates with Set: O(n+m)O(n+m).
    Sorting: O((n+m)log⁡(n+m))O((n+m)log(n+m)).
Overall: O((n+m)log⁡(n+m))O((n+m)log(n+m)).
Space Complexity: O(n+m)O(n+m), for the merged array and Set.

This approach is efficient, concise, and handles edge cases like empty arrays or arrays with all duplicate elements.


____________________________
16. Most Frequent Element
Write a function to find the most frequently occurring element in an array. If there is a tie, return any one of the most frequent elements.
*/
function mostFrequentElement(arr) {
    const frequencyMap = new Map();
    let maxFrequency = 0;
    let mostFrequent = null;

    // Count the frequency of each element
    for (const element of arr) {
        const count = (frequencyMap.get(element) || 0) + 1;
        frequencyMap.set(element, count);

        // Track the element with the highest frequency
        if (count > maxFrequency) {
            maxFrequency = count;
            mostFrequent = element;
        }
    }

    return mostFrequent;
}

// Example usage:
console.log(mostFrequentElement([1, 2, 2, 3, 3, 3])); // Output: 3
console.log(mostFrequentElement(["a", "b", "a", "c", "b", "a"])); // Output: "a"
console.log(mostFrequentElement([1, 1, 2, 2])); // Output: 1 or 2
console.log(mostFrequentElement([])); // Output: null

/*
How It Works:
    1. Frequency Map:
        Use a Map to store the count of each element in the array.
    2. Track Maximum Frequency:
        As you update the count for each element, check if it exceeds the current maxFrequency. If it does, update mostFrequent to the current element.
    3. Return Most Frequent:
    After traversing the array, mostFrequent holds the element with the highest frequency.

Complexity:
Time Complexity: O(n)O(n), where nn is the length of the array. Each element is processed once.
Space Complexity: O(k)O(k), where kk is the number of unique elements in the array (space for the Map).

This function works efficiently, handles ties by returning any one of the most frequent elements, and gracefully returns null for an empty array.


____________________________
17. Capitalize Words
Write a function that capitalizes the first letter of every word in a given string.
*/
function capitalizeWords(str) {
    return str
        .split(' ') // Split the string into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
        .join(' '); // Join the words back into a single string
}

// Example usage:
console.log(capitalizeWords("hello world!")); // Output: "Hello World!"
console.log(capitalizeWords("javaScript is FUN")); // Output: "Javascript Is Fun"
console.log(capitalizeWords("capitalize each word")); // Output: "Capitalize Each Word"
console.log(capitalizeWords("")); // Output: ""
/*
How It Works:
    1. Split the String:
        Use split(' ') to break the string into an array of words based on spaces.
    2. Capitalize Each Word:
        Use map to iterate through each word.
        For each word, capitalize the first letter using charAt(0).toUpperCase().
        Append the rest of the word using slice(1) and convert it to lowercase to ensure consistent formatting.
    3. Join the Words:
        Use join(' ') to combine the array of words back into a single string.

Edge Cases:
Empty string: Returns an empty string.
Mixed case words: Handles inconsistencies like "jAVa" and ensures proper formatting.
Multiple spaces: Extra spaces are preserved in the output.

Complexity:
Time Complexity: O(n)O(n), where nn is the total number of characters in the string.
Space Complexity: O(n)O(n), for storing the intermediate array of words.


____________________________
18. Deep Equality Check
Write a function to check if two objects are deeply equal. The objects may contain nested structures.
-> deeply means every nested element is equal too, no matter the depth level
*/
function deepEqual(obj1, obj2) {
    // Check if both are the same object reference
    if (obj1 === obj2) return true;

    // Check if either is null or not an object (base case)
    if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }

    // Check if the objects have the same number of keys
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Recursively check each key and value
    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

// Example usage:
const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    },
};

const obj2 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    },
};

const obj3 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 5],
    },
};

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false
console.log(deepEqual(obj1, null)); // false
console.log(deepEqual(null, null)); // true
/*
Explanation:
    1. Base Case:
        If both objects are strictly equal (===), they are deeply equal.
        If either is null or not an object, return false unless both are null.
    2. Key Length Check:
        If the objects don’t have the same number of keys, they can’t be equal.
    3. Recursive Comparison:
        Iterate through the keys of the first object.
        For each key, ensure it exists in the second object and that the values are deeply equal using recursion.

Complexity:
Time Complexity: O(n)O(n), where nn is the total number of keys and nested elements in both objects.
Space Complexity: O(d)O(d), where dd is the depth of the objects due to recursive calls.

This function provides a reliable way to perform a deep equality check on complex nested structures


____________________________
19. Reverse Words in a String
Write a function to reverse the words in a given string, while maintaining their original order.
*/
function reverseWordsInString(str) {
    return str
        .split(' ') // Split the string into words
        .map(word => word.split('').reverse().join('')) // Reverse each word
        .join(' '); // Join the reversed words back into a string
}

// Example usage:
console.log(reverseWordsInString("hello world")); // Output: "olleh dlrow"
console.log(reverseWordsInString("Reverse each word")); // Output: "esreveR hcae drow"
console.log(reverseWordsInString("JavaScript is fun")); // Output: "tpircSavaJ si nuf"
console.log(reverseWordsInString("")); // Output: ""

/*
How It Works:
    1. Split the String:
        Use split(' ') to break the string into an array of words.
    2. Reverse Each Word:
        Use map to iterate through each word.
        For each word, split it into characters (split('')), reverse the array of characters (reverse()), and then join them back into a string (join('')).
    3. Join Reversed Words:
        Combine the reversed words back into a single string using join(' ').

Edge Cases:
Empty String: Returns an empty string.
Multiple Spaces: If the input string has multiple spaces, this approach maintains the space structure (e.g., "a b" -> "a b").

Complexity:
Time Complexity: O(n×m)O(n×m), where nn is the number of words, and mm is the average length of the words. Each word is reversed independently.
Space Complexity: O(n×m)O(n×m), for the array of words and their reversed forms.


____________________________
20.  Array Intersection
Write a function that returns the intersection of two arrays (elements that are common to both arrays).
*/
function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    // Find common elements
    return [...set1].filter(item => set2.has(item));
}

// Example usage:
console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]
console.log(arrayIntersection(["a", "b", "c"], ["b", "c", "d"])); // Output: ["b", "c"]
console.log(arrayIntersection([1, 2, 3], [4, 5, 6])); // Output: []
console.log(arrayIntersection([], [1, 2, 3])); // Output: []

/*
How It Works:
    1. Convert Arrays to Sets:
        Convert arr1 and arr2 to Set objects (set1 and set2) to allow for fast lookups and eliminate duplicates.
    2. Find Common Elements:
        Use filter to iterate through the elements of set1 and check if they exist in set2.
    3. Convert to Array:
        The result of filter is an array of common elements.

Complexity:
Time Complexity:
    Converting arrays to sets: O(n+m)O(n+m), where nn and mm are the lengths of the two arrays.
    Filtering common elements: O(n)O(n) (or mm, whichever is smaller).
Overall: O(n+m)O(n+m).
    Space Complexity: O(n+m)O(n+m) for storing the sets.
*/