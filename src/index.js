module.exports = function reverse (n) {
    let result = String(Math.abs(n));
    result = result.split('').reverse().join('');
    result = Number(result);
    return result;
};
