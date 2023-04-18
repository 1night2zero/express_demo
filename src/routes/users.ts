import {Router} from "express";
import UserStore from "../biz/user/UserStore";
import User from "../biz/user/User";
import BrowserStore from "../biz/borrow/BrowserStore";

const userRouter: Router = Router();
const userStore = new UserStore();
const borrowStore = new BrowserStore();

userRouter.get('/', (req, res) => {
    const usersJson = JSON.stringify(userStore.getAllUsers());
    const responseJson = {"users": usersJson};
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(responseJson);
});
// user login
userRouter.post('/', (req, res) => {
    const user: User | undefined = userStore.getUserById(req.body.id);
    if (user && user.name === req.body.name) {
        res.status(200).send('user login success');
    } else {
        res.status(404).send('user not found');
    }
});

// user borrow book
userRouter.get('/:userID/books', (req, res) => {
    res.status(200).send(JSON.stringify(borrowStore.getUserBorrowRecord(req.params.userID)));
});
export default userRouter;