import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

import { userHandle } from "./routers/userRouter"; //default로 export 한게 아님
//const express = require("express");
//내폴더(없으면 node_module에서 epxress를 찾는것)
const app = express(); // 찾은 express 실행한것

app.use(cookieParser(""));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

//req에 get으로 보낸 데이터를 res가 get으로 응답(req가 있으면 res있어야 함!)
// url에 접근하면 fun실행
//get : ex. url을 읽어 오겠다. -> 단순히 페이지 가져오는 것
//post : ex. 로그인한 정보를 가져오겠다 -> 정보를 전달

//누군가 /user에 접속하면 userRouter(이 router obj를 쓰겠다는 뜻)
//router를 써서, user이후의 route(/user/ , /user/edit 등)들을 세분화하겠다는 것
export default app; //app oobject를 누군가 필요로 할때 보내겠다는 뜻(init에서 app쓰기 위해)
