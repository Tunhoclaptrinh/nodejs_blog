const Course = require('../models/Course')
const { mogooseToObject } = require('../../utils/mogoose')
class CourseController {
  // [GET] /course/:slug
  show(req, res, next) {
    // res.send(`COURSE DETAIL ${req.params.slug}`)
    Course.findOne({ slug: req.params.slug })
      .then(course => {
        res.render('courses/show', { course: mogooseToObject(course) })
      })
      .catch(next);
  }

  // [GET] /course/create
  create(req, res, next) {
    res.render('courses/create')
  }

  // [POST] /course/create
  store(req, res, next) {
    // res.render('courses/store')

    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(req.body)
    course.save()
      .then(() => res.redirect(`/me/stored/courses`))
      .catch(err => {
        next(err)
      })
  }

  // [GET] /course/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render('courses/edit', {
          course: mogooseToObject(course),
        }),
      )
      .catch(next);
  }

  // [PUT] /course/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  // [DELETE] /course/:id
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  // [DELETE] /course/:id/force
  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  // [PATCH] /course/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      // cách sửa lại cho ae restore nhưng trong thùng rác không mất dữ liệu
      // vì func restore không tự động thêm field deleted: false nên thêm thủ công lại là xong
      .then(() => { return Course.updateOne({ _id: req.params.id }, { deleted: false }); })
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }
}

module.exports = new CourseController();
