const mongoose = require('mongoose');



const listSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    tasks: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
})

const projectSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    title: String,
    lists: [listSchema],
})

module.exports = mongoose.model("Project", projectSchema);