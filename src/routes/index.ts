import express, {Router} from 'express';
import userRouter from './users';
import bookRouter from './books';
import borrowRouter from './browser';

const router: Router = Router();

router.use('/users', userRouter);
router.use('/books', bookRouter);
router.use('/browser', borrowRouter);

// 异常处理
router.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err);
    res.status(500).send(err.message);
});

export default router