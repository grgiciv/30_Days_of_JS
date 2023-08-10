/* Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */
let score = parseInt(prompt("enter your score", "number goes here"));
if (score >= 80) {
    console.log(`Your score is ${score} and you got A`)
} else if (score >= 70 && score < 89) {
    console.log(`Your score is ${score} and you got B`)
} else if (score >= 60 && score < 69) {
    console.log(`Your score is ${score} and you got C`)
} else if (score >= 50 && score < 59) {
    console.log(`Your score is ${score} and you got D`)
} else {
    console.log(`Your score is ${score} and you got F`)
}

/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */
let month = prompt("enter your month", "month goes here").toLowerCase();
switch (month) {
    case "september": {
        console.log("The season is Autumn.");
        break;
    }
    case "october": {
        console.log("The season is Autumn.");
        break;
    }
    case "november": {
        console.log("The season is Autumn.");
        break;
    }
    case "december": {
        console.log("The season is Winter.");
        break;
    }
    case "january": {
        console.log("The season is Winter.");
        break;
    }
    case "february": {
        console.log("The season is Winter.");
        break;
    }
    case "march": {
        console.log("The season is Spring.");
        break;
    }
    case "april": {
        console.log("The season is Spring.");
        break;
    }
    case "may": {
        console.log("The season is Spring.");
        break;
    }
    case "june": {
        console.log("The season is Summer.");
        break;
    }
    case "july": {
        console.log("The season is Summer.");
        break;
    }
    case "august": {
        console.log("The season is Summer.");
        break;
    }
    default:
        console.log("Input was not a month.")
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt("enter yourday", "day goes here").toLowerCase();
switch (day) {
    case "monday": {
        console.log(`${day} is a working day.`);
        break;
    }
    case "tuesday": {
        console.log(`${day} is a working day.`);
        break;
    }
    case "wednesday": {
        console.log(`${day} is a working day.`);
        break;
    }
    case "thursday": {
        console.log(`${day} is a working day.`);
        break;
    }
    case "friday": {
        console.log(`${day} is a working day.`);
        break;
    }
    case "saturday": {
        console.log(`${day} is a working day.`);
        break;
    }
    case "sunday": {
        console.log(`${day} is a working day.`);
        break;
    }
    default: {
        console.log("Enter day properly");
    }
}