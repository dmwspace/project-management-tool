const mongoose = require('mongoose');

const tasksSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    content: String,
})

const listsSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    title: String,
    tasks: [tasksSchema],
})

const projectSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    title: String,
    lists: [listsSchema],
})

module.exports = mongoose.model("Project", projectSchema);