// import mongoose to create new schema
const mongoose = require('mongoose');

// create new schema
const itemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
});

// export the schema
module.exports = mongoose.model('Item', itemSchema);