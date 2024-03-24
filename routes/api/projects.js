const express = require('express');
const router = express.Router();
const ProjectsCtrl = require('../../controllers/projects')

router.post('/', ProjectsCtrl.create)
router.get('/', ProjectsCtrl.index)
router.get('/:id', ProjectsCtrl.show)
router.delete('/:id', ProjectsCtrl.deleteOneProject)

module.exports = router;
