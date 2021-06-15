function is(num) {
    let i = [];
    z = 2;
    while (num > 2) {
        if (num % z == 0) {
            i.push(z);
            num = num / z;
        } else {
            z++
        }

    }
    return i;
}

console.log(is(79));