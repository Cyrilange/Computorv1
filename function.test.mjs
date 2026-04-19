import { my_trunc, my_abs, my_pow , my_sqrt, toFraction} from "./Utils/utils_math.js"
import { parseTerm } from "./Utils/utils.parsing.js";

function assert(name, result, expected) {
	const bothNaN = Number.isNaN(result) && Number.isNaN(expected);
	if (result === expected || bothNaN) {
	  console.log("😀 ", name, ": ", result);
	} else {
	  console.log("😩 ", name, "got:", result, "expected:", expected);
	}

  }
	process.stdout.write('\x1Bc');
	console.log("======================")
	console.log("========MY_POW========")
	console.log("======================\n")
	assert("7^2", my_pow(7, 2), 49);
	assert("7^3", my_pow(7, 3), 343);
	assert("2^0.5", my_pow(2, 0.5), Math.sqrt(2));
	assert("2^(1/3)", my_pow(2, 1 / 3), Math.cbrt(2)); 
	assert("7^-2", my_pow(7, -2), 1 / 49);
	console.log("\n")


	console.log("======================")
	console.log("========MY_SQRT=======")
	console.log("======================\n")
  	assert("my_sqrt(-1)", my_sqrt(-1), NaN);
	assert("my_sqrt(2)", my_sqrt(2).toFixed(2), (1.4142135623730951).toFixed(2));
	assert("my_sqrt(9)", my_sqrt(9), 3);
	assert("my_sqrt(Infinity)", my_sqrt(Infinity), Infinity);



	console.log("\n======================")
	console.log("========MY_ABS========")
	console.log("========MY_TRUNC=============\n")
	assert("ABS : 3 - 5", my_abs(3 - 5), 2);
	assert("TRUNC 2: 12.6666", my_trunc(12.66666, 2), 12.66);
	assert("TRUNC 3: 12.6666", my_trunc(12.66666, 3), 12.666);



	console.log("\n======================")
	console.log("========PARSE TERM======")
	console.log("======================\n")


	assert("5 * X^2", parseTerm("5 * X^2"), { coef: 5, degree: 2 } )
	assert("8 * X^1", parseTerm("8 * X^2"), { coef: 8, degree: 2 } )

	console.log(toFraction(0.4));   // "2/5"
	console.log(toFraction(0.25));  // "1/4"
	console.log(toFraction(2));     // "2"
	console.log(toFraction(-0.2));  // "-1/5"
	