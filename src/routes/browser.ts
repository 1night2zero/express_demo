import {Router} from "express";
import BrowserStore from "../biz/borrow/BrowserStore";
import UserStore from "../biz/user/UserStore";
import BookStore from "../biz/book/BookStore";

const borrowRouter: Router = Router();
const borrowStore = new BrowserStore();
const userStore = new UserStore();
const bookStore = new BookStore();

borrowRouter.post('/', (req, res) => {


    const user = userStore.getUserById(req.body.user)
    const book = bookStore.getBookById(req.body.book)

    if (userStore.getUserById(req.body.user) === undefined || bookStore.getBookById(req.body.book) === undefined) {
        res.status(404).send('user or book not found');
    } else {
        borrowStore.addBorrowRecord(req.body.user, req.body.book);
        const responseJson = JSON.stringify({"message": "ok", user, book})
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(responseJson);
    }
});

export default borrowRouter;