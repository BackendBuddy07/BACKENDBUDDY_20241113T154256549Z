const mongoose = require('mongoose');

const testSchema = new mongoose.Schema(
{
    test: { 
        type: String,
        required: true,
        unique: false
    },
});

module.exports = mongoose.model('test', testSchema);
