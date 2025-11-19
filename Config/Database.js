const mongoose = require('mongoose');

const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then((conn) => {
            console.log(`DB connected: ${conn.connection.host}`);
        })
        .catch((err) => {
            console.error(`DB connection error: ${err.message}`);
            process.exit(1);
        });
};

module.exports = dbconnection;