import router from "./routes";

import express from "express";

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// 跨域

// 路由
app.use(router);

export default app