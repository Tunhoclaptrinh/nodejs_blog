const express = require('express')
const router = express.Router()

const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create)         // [GET] /courses/create
router.post('/store', courseController.store)          // [POST] /courses/store
router.put('/:id', courseController.update)            // [PUT] /courses/:id
router.delete('/:id', courseController.destroy)        // [DELETE] /courses/:id (xóa mềm)
router.delete('/:id/force', courseController.forceDestroy)        // [DELETE] /courses/:id (xóa hẳn)
router.patch('/:id/restore', courseController.restore) // [PATCH] /courses/:id/restore
router.get('/:id/edit', courseController.edit)         // [GET] /courses/:id/edit
router.get('/:slug', courseController.show)            // [GET] /courses/:slug

module.exports = router;
