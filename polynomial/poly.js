import { reduceEquation, formatOutput } from "../Utils/utils.parsing.js";
import { getDegree } from "../Utils/utils_calcul.js";
const BLUE = "\x1b[38;5;18m";
const RESET = "\x1b[0m";

export function getInput(callback) {
    const input = process.argv[2];
    if(!input) {
        process.stdout.write("Enter equation: ");
        process.stdin.setEncoding("utf8");
        process.stdin.once("data", (data) => {
            callback(data.trim().replace(/"/g, ""));
        });
    } else {
        callback(input);
    }
}

export function solve(equation) {
	process.stdout.write(BLUE);
    const terms = reduceEquation(equation);
    process.stdout.write("Reduced form: ");
    console.log(formatOutput(terms));
    process.stdout.write("Polynomial degree: ");
    console.log(getDegree(terms));
	const degree = getDegree(terms);
	if(degree > 2) {
		console.log("The polynomial degree is strictly greater than 2, I can't solve.");
	} else if(degree == 0) {
		if(terms[0].coef >= 0) {
			console.log("Any real number is a solution.");
		} else {
			console.log("No solution.");
		}
	} else if(degree == 1){

	} else if(degree == 2) {

	}
	process.stdout.write(RESET);
}

getInput(solve);



