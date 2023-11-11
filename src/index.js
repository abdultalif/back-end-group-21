
import express from "express";
import { publicRouter } from "../src/route/public-api.js";
import { errorMiddleware } from "../src/middleware/error-middleware.js";
import dotenv from "dotenv/config";

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(publicRouter);

app.use(errorMiddleware);

app.listen(process.env.port, () => {
    console.log(`port berjalan di http://localhost:${process.env.port}`);
});


