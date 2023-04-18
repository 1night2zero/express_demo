import app from "../app";
import request from "supertest";

describe('POST /browser', () => {
    it('should return borrow status success', async () => {
        const response = await request(app)
            .post('/browser')
            .send({user: "1", book: "1"})
        expect(response.status).toBe(200)
    });
    it('should return borrow user not fund', async () => {
        const response = await request(app)
            .post('/browser')
            .send({user: "11", book: "1"})
        expect(response.status).toBe(404)
    });
    it('should return borrow book not fund', async () => {
        const response = await request(app)
            .post('/browser')
            .send({user: "1", book: "111"})
        expect(response.status).toBe(404)
    });
});