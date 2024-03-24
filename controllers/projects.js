const ProjectModel = require('../models/project')

module.exports = {
    create,
    index,
    show,
    deleteOneProject,
    createTask,
    updateTask
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
        res.status(200).json({projectModel})
    } catch(err) {
        res.json({error: err})
    }
}

async function show(req, res) {
    try {
        const projectToDisplay = await ProjectModel.findOne({_id: req.params.id})
        //console.log('projectToDisplay in controller show method: ', projectToDisplay)
        res.json(projectToDisplay)
    } catch(err) {
        console.log(err)
        res.send({err})
    }
}

async function deleteOneProject(req, res) {
    try {
        const projectToDelete = await ProjectModel.findOneAndDelete({'_id': req.params.id})
        res.json({projectToDelete})
    } catch(err) {
        console.log(err)
        res.json({err})
    }
}

async function createTask(req, res) {
    try {
        const project = await ProjectModel.findById(req.params.projectId)
        project.tasks.push(req.body)
        await project.save()
        //console.log('projectToDisplay in controller show method: ', projectToDisplay)
        res.json(project)
    } catch(err) {
        console.log(err)
        res.send({err})
    }
}

async function updateTask(req, res) {
    try {
        console.log(req.params)
        const project = await ProjectModel.findById(req.params.projectId)
        console.log(project)
        const task = project.tasks.id(req.params.taskId)
        console.log(task)
        const lookup = {
            "Planned": "In Progress",
            "In Progress": "Complete"
        }
        task.category = lookup[task.category]
        await project.save()
        //console.log('projectToDisplay in controller show method: ', projectToDisplay)
        res.json(project)
    } catch(err) {
        console.log(err)
        res.send({err})
    }
}