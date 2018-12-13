const square = require("./function.js").string_square;

test ("GET ./square VALID", () => {
    expect(square("ciao")).toEqual({"result": 16});
});

test ("GET ./square VALID stringa vuota", () => {
    expect(square("")).toEqual({"result": 0});
});

test ("GET ./square NOT VALID not string", () => {
    expect(square(123)).toEqual({"result": -1});
});



