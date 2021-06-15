

// let result = fibo(54);
// console.log(result);

function id(num) {
    var r = 1;
    for (let i = 1; i <= num; i++) {
        var r = r * i;
    }
    return r;
}
console.log(id(7))