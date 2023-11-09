import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send('test');
});

app.listen('3000', () => {
    console.log(`port berjalan di http://localhost:3000`);
});