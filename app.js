import express from "express"; // const express = require("express");
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(helmet()); // Helmet helps you secure your Express apps by setting various HTTP headers.
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use(cookieParser()); // Parse Cookie header and populate req.cookies with an object keyed by the cookie names
app.use(bodyParser.json()); // Parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); // HTTP request logger middleware for node.js
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
