import { my_trunc, my_abs, my_pow , my_sqrt} from "./Utils/utils_math.js"

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
	assert("2^10", my_pow(2, 10), 1024);
	assert("4^0.5", my_pow(4, 0.5), 2);
	assert("8^(1/3)", my_pow(8, 1 / 3), 2);
	assert("2^0.5", my_pow(2, 0.5), Math.sqrt(2));
	assert("2^(1/3)", my_pow(2, 1 / 3), Math.cbrt(2)); 
	assert("7^-2", my_pow(7, -2), 1 / 49);
	assert("8^(-1/3)", my_pow(8, -1 / 3), 0.5); 
	assert("-7^2", my_pow(-7, 2), 49);
	assert("-7^3", my_pow(-7, 3), -343);
	assert("-7^0.5", my_pow(-7, 0.5), NaN);
	assert("-7^(1/3)", my_pow(-7, 1 / 3), NaN);
	assert("-Infinity^1", my_pow(-Infinity, 1), -Infinity);
	assert("-Infinity^1.5", my_pow(-Infinity, 1.5), Infinity);
	assert("-Infinity^-1", my_pow(-Infinity, -1), -0);
	assert("-Infinity^-1.5", my_pow(-Infinity, -1.5), 0); 
	assert("0^1", my_pow(0, 1), 0);
	assert("0^-1", my_pow(0, -1), Infinity); 
	assert("-0^1", my_pow(-0, 1), -0);
	assert("-0^1.5", my_pow(-0, 1.5), 0);
	assert("-0^-1", my_pow(-0, -1), -Infinity);
	assert("-0^-1.5", my_pow(-0, -1.5), Infinity);
	assert("0.9^Infinity", my_pow(0.9, Infinity), 0);
	assert("1^Infinity", my_pow(1, Infinity), NaN);
	assert("1.1^Infinity", my_pow(1.1, Infinity), Infinity);
	assert("0.9^-Infinity", my_pow(0.9, -Infinity), Infinity);
	assert("1^-Infinity", my_pow(1, -Infinity), NaN);
	assert("1.1^-Infinity", my_pow(1.1, -Infinity), 0);
	assert("NaN^0", my_pow(NaN, 0), 1);
	assert("NaN^1", my_pow(NaN, 1), NaN);
	assert("1^NaN", my_pow(1, NaN), NaN);
	console.log("\n")


	console.log("======================")
	console.log("========MY_SQRT=======")
	console.log("======================\n")
  	assert("my_sqrt(-1)", my_sqrt(-1), NaN);
	assert("my_sqrt(-0)", my_sqrt(-0), -0);
	assert("my_sqrt(0)", my_sqrt(0), 0);
	assert("my_sqrt(1)", my_sqrt(1), 1);
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
	console.log("========MY_FLOOR======")
	console.log("======================\n")
	