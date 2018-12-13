const app = require("./index.js").app;
const request = require("supertest");

test ("GET / valid", () => {
    return request(app).get("/").then(res => {
        expect(res.status).toBe(200);
        //expect(res.send).toBe("Welcome in square!");
    })
});