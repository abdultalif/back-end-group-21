const express = require('express');
const { PrismaClient } = require('@prisma/client');
const Joi = require('joi');
const multer = require('multer');
const path = require('path');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

// Konfigurasi multer untuk menyimpan file di folder 'uploads'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

// Validasi input menggunakan Joi
const pizzaSchema = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
    stok: Joi.number().integer().min(0).required(),
    description: Joi.string().required(),
    price: Joi.number().min(0).required(),
});

// Middleware untuk menangani upload file
app.post('/upload', upload.single('image'), (req, res) => {
    res.status(200).json({ message: 'File uploaded successfully', filename: req.file.filename });
});

// CRUD endpoints
app.get('/pizzas', async (req, res) => {
    const pizzas = await prisma.pizza.findMany();
    res.json(pizzas);
});

app.post('/pizzas', upload.single('image'), async (req, res) => {
    try {
        // Validasi input
        const { error } = pizzaSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        // Simpan data ke database
        const { name, category, stok, description, price } = req.body;
        const imageUrl = req.file.filename;

        const newPizza = await prisma.menu.create({
            data: {
                name,
                category,
                stok,
                description,
                price,
                image: imageUrl,
            },
        });

        res.json(newPizza);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
