const isPalindrome = (str) => {
    const len = str.length;
    if (len < 2) {
        return true;
    }
    if (str[0] === str[len - 1]) {
        return isPalindrome(str.slice(1, -1));
    } else {
        return false;
    }
}