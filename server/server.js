const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recordRoutes = require('./routes/records');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb://localhost:27017/callrecords', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api', recordRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
