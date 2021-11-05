function trianglePattern(x, y) {
    if (x === 0) {
        return;
    }
    let space = "";
    for (let i = 0; i < y; i++) {
        if (i < x - 1) {
            space += " "
        } else {
            space += String.fromCharCode(64 + (y - x + (i - x) + 2));
        }
    }
    console.log(space);
    trianglePattern(x - 1, y);
}

trianglePattern(5, 5);