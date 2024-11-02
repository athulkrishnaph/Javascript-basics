// while
let count = 0;
while (count < 3) {
    console.log("Count is: " + count);
    count++;
}

// for
for (let j = 0; j < 5; j++) {
    console.log("Value of j is: " + j);
}

// nested
for (let p = 0; p < 3; p++) {
    for (let q = 0; q < 2; q++) {
        console.log(`Outer Loop: ${p}, Inner Loop: ${q}`);
    }
}

const arr = [10, 20, 30, 40, 50]

// for of 
for (let num of arr) {
    console.log(num);   
}

// for in 
for (let num in arr) {
    console.log(num,arr[num]);
    
}