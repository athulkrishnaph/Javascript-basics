var first = 10;
var second = 5;
console.log();

// assignment
var third = second;
console.log(`=\t${third}`);
console.log();

// arithmetic
console.log(`+\t${first+second}`);
console.log(`-\t${first-second}`);
console.log(`*\t${first*second}`);
console.log(`/\t${first/second}`);
console.log(`%\t${first%second}`);
console.log(`**\t${first**second}`);
console.log();

// relational
console.log(`<\t${first<second}`);
console.log(`>\t${first>second}`);
console.log(`<=\t${first<=second}`);
console.log(`>=\t${first>=second}`);
console.log(`==\t${first==second}`);
console.log(`===\t${first===second}`);
console.log(`!=\t${first!=second}`);
console.log();

// logical
console.log(`&&\t${first<second && first!=0}`);
console.log(`||\t${first<second || first!=0}`);
console.log(`!\t${!first!=0}`);
console.log();


// increment/decrement
console.log(`++N\t${++third}`);
console.log(`--N\t${--third}`);
console.log(`N++\t${third++}`);
console.log(`N--\t${third--}`);
console.log();

// short hand
console.log(`+=\t${first+=second}`);
console.log(`-=\t${first-=second}`);
console.log(`/=\t${first/=second}`);
console.log(`*=\t${first*=second}`);
console.log();

// ternary
console.log(first>second?`${first} is bigger`:`${second} is bigger`);

// truthy
first>second && console.log(`${first} is bigger`);