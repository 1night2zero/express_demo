import {Router} from "express";
import BrowserStore from "../biz/borrow/BrowserStore";
import UserStore from "../biz/user/UserStore";
import BookStore from "../biz/book/BookStore";

const borrowRouter: Router = Router();
const borrowStore = new BrowserStore();
const userStore = new UserStore();
const bookStore = new BookStore();

borrowRouter.post('/', (req, res) => {

    if (userStore.getUserById(req.body.user) === undefined) {
        res.status(404).send('user not found');
    } else if (bookStore.getBookById(req.body.book) === undefined) {
        res.status(404).send('book not found');
    } else {
        borrowStore.addBorrowRecord(req.body.user, req.body.book);
        res.status(200).send('borrow book: ' + JSON.stringify(req.body));
    }
});

export default borrowRouter;