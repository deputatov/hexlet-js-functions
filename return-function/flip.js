const flip = f => (a, b) => f(b, a)

const sub = (a, b) => a - b;
const reverseSub = flip(sub);

sub(5, 3); // 2
reverseSub(5, 3); // -2