import {Router} from "express";
import BookStore from "../biz/book/BookStore";

const bookRouter: Router = Router();
const bookStore = new BookStore();
bookRouter.get('/', (req, res) => {
    const books = bookStore.getAllBooks();
    // transform to json
    res.status(200).send(JSON.stringify(books));
});
// login book
bookRouter.post('/', (req, res) => {
    const book = bookStore.getBookById(req.body.id);
    if (book && book.name === req.body.name) {
        res.status(200).send('books login success');
    } else {
        res.status(404).send('books login failed');
    }
});
export default bookRouter;