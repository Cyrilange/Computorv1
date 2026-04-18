import {my_trunc, my_abs, my_pow , my_sqrt} from "./utils_math.js"
import {parseTerm, separate,tokenise, parseterms, reduceEquation,trie_degree,formatOutput } from "./utils.parsing.js"


export function getDegree(terms) {
	let max = 0;
	for(let i = 0; i < terms.length; i++) {
		if(terms[i].degree > max) {
			max = terms[i].degree;
		}
	}
	return max;
}


