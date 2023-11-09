import express from "express";
import dotenv from "dotenv/config";

const app = express();


app.get('/', (req, res) => {
    res.send('test');
});

app.listen(process.env.port, () => {
    console.log(`port berjalan di http://localhost:${process.env.port}`);
});