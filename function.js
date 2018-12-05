function string_square(s){
    let square = -1;
    if (typeof s === 'string' || s instanceof String){
        square = s.length * s.length;
    }

    return square;
}

module.exports = {
    string_square: string_square
}