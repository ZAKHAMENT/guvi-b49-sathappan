DAY-4

//1.)	PRIN ODD NUMBERS IN AN ARRAY.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Odd numbers:");
numbers.forEach(number => {
  if (number % 2 !== 0) {
    console.log(number);
  }
});

//2.)	convert all the strings to title caps in a string array.
const strings = ["hello", "world", "javascript"];

const titleCaseStrings = strings.map(string => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
});

console.log(titleCaseStrings);

//3.)	sum of all numbers in a array.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum:", sum);

//4.)	return all the prime numbers in aarray.
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum:", sum);
//5.)	return all the palindrome in a array.  

function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

function findPalindromes(strings) {
  const palindromes = [];
  
  strings.forEach(string => {
    if (isPalindrome(string)) {
      palindromes.push(string);
    }
  });
  
  return palindromes;
}

const strings = ['level', 'racecar', 'hello', 'radar', 'world'];
const palindromeStrings = findPalindromes(strings);

console.log('Palindromes:', palindromeStrings);

//6.)	return median of two sorted arrays of the same size

function findMedianSortedArrays(nums1, nums2) {
  const mergedArray = mergeArrays(nums1, nums2);
  const length = mergedArray.length;
  
  if (length % 2 === 0) {
    const midIndex = length / 2;
    return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
  } else {
    const midIndex = Math.floor(length / 2);
    return mergedArray[midIndex];
  }
}

function mergeArrays(nums1, nums2) {
  const merged = [];
  let i = 0;
  let j = 0;
  
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }
  
  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }
  
  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }
  
  return merged;
}

// Example usage:
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const median = findMedianSortedArrays(nums1, nums2);

console.log("Median:", median);

//7.)	remove duplicates from an array.

const array = [1, 2, 2, 3, 4, 4, 5, 5];

const uniqueArray = Array.from(new Set(array));

console.log(uniqueArray);

//8.)	rotate an array from k times.

function removeElementsByKTimes(array, k) {
  if (k <= 0) {
    return array;
  }

  array.splice(0, k);

  return array;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const k = 3;

const result = removeElementsByKTimes(array, k);

console.log(result);



//2.) ARROW FUNCTION

//a.)	print odd numbers in an array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOddNumbers = numbers => {
  numbers.forEach(number => {
    if (number % 2 !== 0) {
      console.log(number);
    }
  });
};

printOddNumbers(numbers);

//b.)	convert all the strings to title caps ina single array.

const strings = ["hello", "world", "javascript"];

const convertToTitleCase = strings => {
  return strings.map(string => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  });
};

const titleCaseStrings = convertToTitleCase(strings);

console.log(titleCaseStrings);

//c.)	sum of all numbers in an array.

const numbers = [1, 2, 3, 4, 5];

const calculateSum = numbers => numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const sum = calculateSum(numbers);

console.log("Sum:", sum);

//d.)	return all the prime number in an array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = number => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const findPrimeNumbers = numbers => numbers.filter(number => isPrime(number));

const primeNumbers = findPrimeNumbers(numbers);

console.log(primeNumbers);


//e.)	return all the palindromes in an array using arrow function.
const strings = ["level", "racecar", "hello", "radar", "world"];

const isPalindrome = string => {
  const reversedStr = string.split("").reverse().join("");
  return string === reversedStr;
};

const findPalindromes = strings => strings.filter(string => isPalindrome(string));

const palindromeStrings = findPalindromes(strings);

console.log(palindromeStrings);

