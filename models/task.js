const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    content: String,
})

module.exports = mongoose.model('Task')