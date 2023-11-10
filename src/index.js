
import express from "express";
import { publicRouter } from "../src/route/public-api.js";
import { errorMiddleware } from "../src/middleware/error-middleware.js";
import dotenv from "dotenv/config";

export const web = express();
web.use(express.json());
web.use(express.urlencoded({ extended: true }));

web.use(publicRouter);

web.use(errorMiddleware);

web.listen(process.env.port, () => {
    console.log(`port berjalan di http://localhost:${process.env.port}`);
});


