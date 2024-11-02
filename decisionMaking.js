// if
age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

// if-else
age = 16;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// else-if ladder
score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

// switch
let day = "Saturday";
switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Wednesday":
        console.log("Midweek day.");
        break;
    case "Friday":
        console.log("End of the work week.");
        break;
    default:
        console.log("It's a regular day.");
}