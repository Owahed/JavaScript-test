function isPrime(n) {
    let prime=n!=1;
    for (let i = 2; i < n; i++) {
        // const prime = n[i];
        if (n%i===0) {
            return prime= false;
        }
    }
    return prime;
}

console.log(isPrime(13))
console.log(isPrime(12))
console.log(isPrime(23))