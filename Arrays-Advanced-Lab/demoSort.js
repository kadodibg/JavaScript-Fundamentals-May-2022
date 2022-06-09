let nums = [20, 40, 10, 30, 100, 5];
nums.sort((a, b) => a-b);
console.log(nums.join(' | '));
// 5 | 10 | 20 | 30 | 40 | 100 (a,b) => a-b == ascending

let nums1 = [20, 40, 10, 30, 100, 5];
nums1.sort((a, b) => b-a);
console.log(nums1.join(' | '));
// 100 | 40 | 30 | 20 | 10 | 5 (a,b) => b-a == descending

let words = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
words.sort((a, b) => a.localeCompare(b));
console.log(words);
// ['bite', 'Eggs', 'Grip', 'jAw', 'nest']

let words1 = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
words1.sort((a, b) => b.localeCompare(a));
console.log(words1);
// ['nest', 'jAw', 'Grip', 'Eggs', 'bite']
