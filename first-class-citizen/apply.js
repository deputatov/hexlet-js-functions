const apply_v1 = (n, f, a) => { //n - number or quantity, f - function, a - argument
    for (let i = 0; i < n; i++) {
        a = f(a);
    }
    return a
}

const apply_v2 = (n, f, a) => {
    return n === 0 ? a : apply_v2(n - 1, f, f(a))
}

console.log(apply_v2(0, Math.sqrt, 4));
console.log(apply_v2(1, Math.sqrt, 4));
console.log(apply_v2(2, Math.sqrt, 16));
console.log(apply_v2(3, Math.sqrt, 256));
console.log(apply_v2(1, v => v ** 2, 3)); // => 9
console.log(apply_v2(5, v => v + 10, 3)); // => 53