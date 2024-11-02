// declaration and initialization
const arr = [10, 20, 30, 40, 50]
console.log(arr);

// arrayMethods

// 1) push()
arr.push(60)
console.log(arr);

// 2) pop()
arr.pop()
console.log(arr);

// 3) shift()
arr.shift()
console.log(arr);

// 4) unshift()
arr.unshift(10)
console.log(arr);

// 5) sort()
arr.sort((a, b) => b - a)   // descending order
console.log("descending order",arr);
arr.sort((a, b) => a - b)   // ascending order
console.log("ascending order",arr);

// 6) for.Each()
arr.forEach((num) => console.log(num));

// 7) filter()
newArr = arr.filter((num) => num > 30)
console.log(newArr);

// 8) find()
value = arr.find((num) => num == 30)
console.log(value);

// 9) map()
console.log(arr.map((num)=>num*2));

// 10) reduce()
console.log(arr.reduce((a, b) => a += b));

// 11) some()
console.log(arr.some((num)=>num%3==0));

// 12) every()
console.log(arr.every((num) => num % 20 == 0));

// 13) flat()
arr2=[[1, 2], 3, 4, [5, 6]]
console.log(arr2.flat(Infinity));

// 14) includes()
console.log(arr.includes(20));

// 15) splice()
arr.splice(2, 1)
console.log(arr);

// 16) reverse()
arr.reverse()
console.log(arr);

// 17) concat()
console.log(arr.concat(arr2));

// 18) join()
console.log(arr.join(" "));

// 19) indexOf()
console.log(arr.indexOf(20));

// 20) slice()
console.log(arr.slice(0,-1));