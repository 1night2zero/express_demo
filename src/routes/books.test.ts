import app from "../app";
import request from "supertest";

describe('GET /books', () => {
    it('should return a list of books', async () => {
        const response = await request(app).get('/books');
        expect(response.status).toBe(200);
        const books = JSON.parse(response.text);
        expect(books).toEqual([
            {_name: "第一本书", _id: "1"},
            {_name: "第二本书", _id: "2"},
            {_name: "第三本书", _id: "3"},
            {_name: "第四本书", _id: "4"},
            {_name: "第五本书", _id: "5"},
            {_name: "第六本书", _id: "6"},
            {_name: "第7本书", _id: "7"},]);
    })
});
describe('POST /books', () => {
    it('should return status of login success or failed', async () => {
        const response = await request(app)
            .post('/books')
            .send({id: "1", name: "第一本书"});
        expect(response.status).toBe(200);
        expect(response.text).toEqual("books login success");
    });
    it('should return status of login failed', async () => {
        const response = await request(app)
            .post('/books')
            .send({id: "1", name: "c"});
        expect(response.status).toBe(404);
        expect(response.text).toEqual("books login failed");
    });
});
