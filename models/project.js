const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    content: String,
    category: {
        type: String,
        enum: {values: ['Planned', 'In Progress', 'Complete']}
    }
})


const projectSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    title: String,
    tasks: [taskSchema]
    });

module.exports = mongoose.model("Project", projectSchema);