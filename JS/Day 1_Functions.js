function factorial(n) {
    let temp = 1;
    for (let i = 2 ; i <= n ; i++) {
        temp *= i;
    }
    return temp;
}