// function fibo(n) {
//     let fiboNum = [0, 1];
//     for (let i = 2; i < n; i++) {
//        fiboNum[i]=fiboNum[i-1]+ fiboNum[i-2];
//     }
//     return fiboNum;
// }

// let result = fibo(54);
// console.log(result);

function id(num) {
    var r = 1;
    for (let i = 1; i <= num; i++) {
        var r = r * i;
    }
    return r;
}
console.log(id(5))