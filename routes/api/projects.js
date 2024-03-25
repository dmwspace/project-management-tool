const express = require('express');
const router = express.Router();
const ProjectsCtrl = require('../../controllers/projects')

router.post('/', ProjectsCtrl.create)
router.get('/', ProjectsCtrl.index)
router.get('/:id', ProjectsCtrl.show)
router.delete('/:id', ProjectsCtrl.deleteOneProject)
router.put('/:projectId/tasks', ProjectsCtrl.createTask)
router.put('/:projectId/tasks/:taskId', ProjectsCtrl.updateTask)

module.exports = router;
