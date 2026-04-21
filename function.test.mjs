import { my_trunc, my_abs, my_pow , my_sqrt, toFraction} from "./Utils/utils_math.js"
import { parseTerm } from "./Utils/utils.parsing.js";
import { solve } from "./polynomial/poly.js";

function assert(name, result, expected) {
	const bothNaN = Number.isNaN(result) && Number.isNaN(expected);
	if (result === expected || bothNaN) {
	  console.log(name, ": ", result);
	} else {
	  console.log(name, "got:", result, "expected:", expected);
	}

  }
	process.stdout.write('\x1Bc');
	console.log("========MY_POW========")

	assert("2^0.5", my_pow(2, 0.5).toFixed(4), Math.sqrt(2).toFixed(4));
	assert("2^(1/3)", my_pow(2, 1 / 3), Math.cbrt(2)); 
	assert("7^-2", my_pow(7, -2), 1 / 49);
	console.log("========MY_SQRT=======")
  	assert("my_sqrt(-1)", my_sqrt(-1), NaN);
	assert("my_sqrt(2)", my_sqrt(2).toFixed(2), (1.4142135623730951).toFixed(2));
	console.log("========MY_ABS========")
	assert("ABS : 3 - 5", my_abs(3 - 5), 2);
	console.log("========MY_TRUNC=============")
	assert("TRUNC 2: 12.6666", my_trunc(12.66666, 2), 12.66);
	console.log("========PARSE TERM======")
	assert("5 * X^2", parseTerm("5 * X^2"), { coef: 5, degree: 2 } )
	assert("8 * X^1", parseTerm("8 * X^1"), { coef: 8, degree: 1 } )
	console.log("========TO FRACTION======")
	assert("0.4" ,toFraction(0.4))
	console.log("\n==========polynominal============================")
	 assert("5 * X^0 + 4 * X^1 - 9.3 * X^2 = 1 * X^0", 
		solve("5 * X^0 + 4 * X^1 - 9.3 * X^2 = 1 * X^0"), 
	"Discriminant is strictly positive, the two solutions are: 0.905239 -0.475131");