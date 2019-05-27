const substr = (str = '', i = 0, l = str.length) => {
    if (l === 0 || i >= str.length) { return '' }
    if (l < 0) { l = 1 }
    if (i < 0) { i = 0 }
    if (l + i - 1 > str.length - 1) { l = str.length - i }
    let result = ''
    for (let j = 0; j < l; j++) {
        result += str[i]
        i++
    }
    return result
}