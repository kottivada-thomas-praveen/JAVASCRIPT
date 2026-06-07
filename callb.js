sum = (x,y) => {
    console.log(x+y);
}

sub = (x,y) => {
    return x-y;
}

calculate = (x,y,operation) => {
    operation(x,y)
}

console.log(calculate());

