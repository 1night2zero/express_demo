import request from "supertest";
import app from "../app";

describe('GET /users', () => {
    it('should return a list of users', async () => {
        const response = await request(app).get('/users')
        expect(response.status).toBe(200)
        const users = JSON.parse(response.body.users)
        expect(users).toEqual([
            {_name: "c", _id: "1"},
            {_name: "李四", _id: "2"},
            {_name: "王五", _id: "3"},
            {_name: "mier", _id: "4"},
        ])
    });
});
describe('POST /users', () => {
    it('should return user login status success', async () => {
        const response = await request(app)
            .post('/users')
            .send({name: "c", id: "1"})
        expect(response.status).toBe(200)
    });
    it('should return user login status failed', async () => {
        const response = await request(app)
            .post('/users')
            .send({name: "a", id: "1"})
        expect(response.status).toBe(404)
    });
})

describe('GET /users/:userID/books', () => {
    it('should return user borrowed books', async () => {
        const response = await request(app)
            .get('/users/1/books')
        expect(response.status).toBe(200)
        const books = JSON.parse(response.text)
        expect(books).toEqual([
            {_user: "1", _book: "1", _borrowTime: "2020-04-03T00:00:00.000Z"},
            {_user: "1", _book: "2", _borrowTime: "2020-04-03T00:00:00.000Z"},
        ])

    });
})