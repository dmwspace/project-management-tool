const ProjectModel = require('../models/project')

module.exports = {
    create,
    index
}

async function create(req, res) {
    console.log('req in create method in projects component: ', req.body)

    const project = await ProjectModel.create({
        user: req.user,
        title: req.body.title,
        lists: req.body.lists
    })
    res.json(project)
}

async function index(req, res) {
    try {
        const projectModel = await ProjectModel.find({user: req.user})
        console.log('projectModel: ', projectModel)
        res.status(200).json
    } catch(err) {
        res.json({error: err})
    }
}