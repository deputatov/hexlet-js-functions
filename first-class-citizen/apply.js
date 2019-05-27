const apply_v1 = (n, f, a) => { //n - number or quantity, f - function, a - argument
    for (let i = 0; i < n; i++) {
        a = f(a);
    }
    return a
}

const apply_v2 = (n, f, a) => {
    return n === 0 ? a : apply_v2(n - 1, f, f(a))
}