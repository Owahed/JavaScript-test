function fiboR(n) {
    if (n==0) {
        return 0;
    }
    if (n==1) {
        return 1;
    }else{
       return fiboR(n-1) + fiboR(n-2);
    }
}

console.log(fiboR(10))