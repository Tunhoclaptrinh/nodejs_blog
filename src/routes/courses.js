const express = require('express')
const router = express.Router()

const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create)         // [GET] /courses/create
router.post('/store', courseController.store)          // [POST] /courses/store
router.post('/handle-form-actions', courseController.handleFormActions)          // [POST] /courses/handle-form-actions (bulk actions cho stored courses)
router.post('/handle-trash-form-actions', courseController.handleTrashFormActions)  // [POST] /courses/handle-trash-form-actions (bulk actions cho trash courses)
router.put('/:id', courseController.update)            // [PUT] /courses/:id
router.delete('/:id', courseController.destroy)        // [DELETE] /courses/:id (xóa mềm)
router.delete('/:id/force', courseController.forceDestroy)        // [DELETE] /courses/:id (xóa hẳn)
router.patch('/:id/restore', courseController.restore) // [PATCH] /courses/:id/restore
router.get('/:id/edit', courseController.edit)         // [GET] /courses/:id/edit
router.get('/:slug', courseController.show)            // [GET] /courses/:slug

module.exports = router;