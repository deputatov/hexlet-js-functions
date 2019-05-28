const reverse = (str) => {
    const lastIndex = str.length - 1;
    const iter = (i, acc) => {
        if (i > lastIndex) {
            return acc;
        }
        return iter(i + 1, str[i] + acc);
    }
    return iter(0, '');
}