let y = 5;

//pass by value
function test(x) {
    x = x + 1
    console.log(x)
}
test(y);

console.log(y)

function test2(x) { //wäre das hier Parameter y -> würde die Variable y nicht verändert werden.
    y += 1
}

test2(y)

console.log(y)

z = [2,3,6]

function test3(x) {
    x[0] =  9
}

test3(z)

console.log(z)
