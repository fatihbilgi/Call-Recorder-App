const express = require('express');
const multer = require('multer');
const path = require('path');
const Record = require('../models/record');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), async (req, res) => {
    if (req.file) {
        const newRecord = new Record({ filename: req.file.filename });
        await newRecord.save();
        res.status(201).json(newRecord);
    } else {
        res.status(400).json({ message: 'File upload failed' });
    }
});

router.get('/records', async (req, res) => {
    const records = await Record.find();
    res.json(records);
});

module.exports = router;
