import app from "../app";
import request from "supertest";

describe('集成测试', () => {
    describe('POST /users login tow users', () => {
        it('should return status of login success', async () => {
            const responseOne = await request(app)
                .post('/users')
                .send({id: "1", name: "c"});
            expect(responseOne.status).toBe(200);
            expect(responseOne.text).toEqual("user login success");

            const responseTwo = await request(app)
                .post('/users')
                .send({id: "4", name: "mier"});
            expect(responseTwo.status).toBe(200);
            expect(responseTwo.text).toEqual("user login success");
        });
    })

    describe('book', () => {
        it('should return browser status code 200', async () => {
            const response = await request(app)
                .post('/browser')
                .send({user: "1", book: "1"})
            expect(response.status).toBe(200)
            const exp = response.body
            expect(exp).toEqual({
                "message": "ok",
                "user": {"_name": "c", "_id": "1"},
                "book": {"_name": "第一本书", "_id": "1"}
            })
        });
        it('should return user browser list', async () => {
            const response = await request(app)
                .get('/users/1/books');
            expect(response.status).toBe(200);
            const exp = response.body
            expect(exp).toEqual([{"_user": "1", "_book": "1", "_borrowTime": "2020-04-03T00:00:00.000Z"},
                {"_user": "1", "_book": "2", "_borrowTime": "2020-04-03T00:00:00.000Z"}]);
        })

    })

})