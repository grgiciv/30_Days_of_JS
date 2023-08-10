// Write a program which tells the number of days in a month.
let month = prompt("enter mont", "month goes here").toLowerCase();
switch (month) {
    case "january": {
        console.log(`${month} has 31 days.`);
        break;
    }
    case "february": {
        console.log(`${month} has 28 days.`);
        break;
    }
    case "march": {
        console.log(`${month} has 31 days.`);
        break;
    }
    case "april": {
        console.log(`${month} has 30 days.`);
        break;
    }
    case "may": {
        console.log(`${month} has 31 days.`);
        break;
    }
    case "june": {
        console.log(`${month} has 30 days.`);
        break;
    }
    case "july": {
        console.log(`${month} has 31 days.`);
        break;
    }
    case "august": {
        console.log(`${month} has 31 days.`);
        break;
    }
    case "september": {
        console.log(`${month} has 30 days.`);
        break;
    }
    case "october": {
        console.log(`${month} has 31 days.`);
        break;
    }
    case "november": {
        console.log(`${month} has 30 days.`);
        break;
    }
    case "december": {
        console.log(`${month} has 31 days.`);
        break;
    }
    default: {
        console.log("Enter day properly");
    }
}

// Write a program which tells the number of days in a month, now consider leap year.
month = prompt("enter mont", "month goes here").toLowerCase();
switch (month) {
    case "january": {
        console.log(`${month} has 31 days.`);
        break;
    }
    case "february": {
        date = new Date().getFullYear();
        date % 4 == 0 ? console.log(`${month} has 29 days.`) : console.log(`${month} has 28 days.`)
        break;
    }
    case "march": {
        console.log(`${month} has 31 days.`);
        break;
    }
    case "april": {
        console.log(`${month} has 30 days.`);
        break;
    }
    case "may": {
        console.log(`${month} has 31 days.`);
        break;
    }
    case "june": {
        console.log(`${month} has 30 days.`);
        break;
    }
    case "july": {
        console.log(`${month} has 31 days.`);
        break;
    }
    case "august": {
        console.log(`${month} has 31 days.`);
        break;
    }
    case "september": {
        console.log(`${month} has 30 days.`);
        break;
    }
    case "october": {
        console.log(`${month} has 31 days.`);
        break;
    }
    case "november": {
        console.log(`${month} has 30 days.`);
        break;
    }
    case "december": {
        console.log(`${month} has 31 days.`);
        break;
    }
    default: {
        console.log("Enter day properly");
    }
}