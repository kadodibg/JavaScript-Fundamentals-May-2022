// // let numbers = [1, 2, 3, 4, 5];
// // let names = [];

// // console.log(numbers[0]);
// // let index = 0;
// // numbers[index]
// // numbers[1+4]
// // numbers[3] = numbers[1] + numbers[3];

// // console.log(numbers.length); // 5 - count index
// // console.log(numbers); //[1, 2, 3, 4, 5];

// let arr = [10, 20, 30];
// arr[arr.length] = 40;
// console.log(arr);

// arr.push(50);
// console.log(arr);

// let nums = [10,20,30];
// nums[4] = 50; // Will resize the array
// console.log(nums); //[10, 20, 30 <empty>, 50];
// console.log(nums.length); // 5 
// console.log(nums[3]); // undefined

// console.log(nums[-5]); // undefined (invalid index)
// nums[-5] = 8; //Will not resize the array 
// console.log(nums[-5], nums.length);

// Otricatelnite stoinosti ne promeniat dulzhinata na array 

let arr = [10, 20, 30];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

let separator = " <=> ";

console.log(arr.includes(20)); // true
console.log(arr.includes(20, 3)); // false 
console.log(arr.includes(0)); // false
console.log(arr.includes(10+10)); // true

console.log(arr.join(':')); // 10:20:30
console.log(arr.join(separator)); // 10<=>20<=>30
let words = ["one", "two"];
console.log(arr.join('--->'));
console.log(arr.toString());
console.log(words.join(' - ')); // one - two 
console.log('hello world'.includes('l'));

let capitals = ['Sofia', 'Washington', 'London'];
for(let i = 0; i< capitals.length; i++){
console.log(capitals[i]);
}