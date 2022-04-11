function isPositive(a) {
    if (a > 0) {
        return 'YES';
    }
    throw a === 0 ? new Error('Zero Error') : new Error('Negative Error');
}