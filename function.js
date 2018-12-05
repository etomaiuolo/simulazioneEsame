function string_square(s){
    let square = -1;
    if (typeof s === 'string' || s instanceof String){
        square = s.length * s.length;
    }

    let result = new Object;
    result["result"] = square;

    return result;
}

module.exports = {
    string_square: string_square
}