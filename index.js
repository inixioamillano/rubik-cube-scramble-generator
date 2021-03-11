exports.generate = (length = 10) => {
    const moves = ['F', 'B', 'R', 'L', 'U', 'D'];
    const modifiers = ['2', '\'', ''];
    let scramble = [];
    if (isNaN(length) || length < 0 || length !== parseInt(length, 10)) {
        throw new TypeError('The length must be an integer number greater than 0');
    }
    for (i = 0; i < length; i++) {
        const move = moves[Math.floor(Math.random() * moves.length)];
        const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
        scramble.push(`${move}${modifier}`);
    }
    return scramble;
}