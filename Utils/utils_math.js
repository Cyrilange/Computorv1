export function my_pow(base, exponent) {
	if (Number.isNaN(base)) return exponent === 0 ? 1 : NaN;
	if (Number.isNaN(exponent)) return NaN;
	if (exponent === 0) return 1;
  
	if (base === -Infinity) {
	  if (exponent > 0)
		return Number.isInteger(exponent) && exponent % 2 !== 0 ? -Infinity : Infinity;
	  return Number.isInteger(exponent) && exponent % 2 !== 0 ? -0 : 0;
	}
  
	if (base === Infinity) return exponent > 0 ? Infinity : 0;
  
	if (Object.is(base, -0)) {
	  if (exponent > 0)
		return Number.isInteger(exponent) && exponent % 2 !== 0 ? -0 : 0;
	  return Number.isInteger(exponent) && exponent % 2 !== 0 ? -Infinity : Infinity;
	}
  
	if (base === 0) return exponent > 0 ? 0 : Infinity;
  
	if (exponent < 0) return 1 / my_pow(base, -exponent);
	if (base < 0 && !Number.isInteger(exponent)) return NaN;
	if (!Number.isInteger(exponent)) return Math.exp(exponent * Math.log(base));
  
	let result = 1;
	for (let i = 0; i < exponent; i++) {
	  result *= base;
	}
	return result;
  }

  export function my_abs(x) {
	return x < 0 ? -x : x;
  }


  export function my_trunc(x, decimals) {
	const factor = my_pow(10, decimals);
	return (x * factor | 0) / factor;
  }

  export function my_sqrt(x) {
	if (x === 0 && 1 / x === -Infinity) return -0;
	if (x < 0) return NaN;
	if (x === 0) return 0;
	if (x === Infinity) return Infinity;
  
	let n = x;
	let prev;
	do {
	  prev = n;
	  n = (n + x / n) / 2;
	} while (my_abs(n - prev) > 1e-10);
	return n;
  }

 export function my_gcd(a, b) {
    if(b == 0) { return a; }
    return my_gcd(b, a % b);
}

export function toFraction(num, maxDen = 1000) {
    let sign = num < 0 ? "-" : "";
    num = Math.abs(num);

    let bestNum = 1;
    let bestDen = 1;
    let bestError = Math.abs(num - bestNum / bestDen);

    for (let den = 1; den <= maxDen; den++) {
        let nume = Math.round(num * den);
        let error = Math.abs(num - nume / den);

        if (error < bestError) {
            bestNum = nume;
            bestDen = den;
            bestError = error;
        }
    }

    let gcd = my_gcd(bestNum, bestDen);

    return sign + (bestNum / gcd) + "/" + (bestDen / gcd);
}
