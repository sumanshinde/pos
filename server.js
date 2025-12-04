const app = require('./src/app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const DB = process.env.MONGO_URI;

mongoose.connect(DB)
    .then(() => console.log('DB connection successful!'))
    .catch(err => {
        console.log('DB Connection Failed');
        console.log(err);
    });

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`);
});

process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
