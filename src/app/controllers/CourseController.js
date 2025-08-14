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

  // [GET] /course/create
  store(req, res, next) {
    // res.render('courses/store')

    const formData = req.body
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(req.body)
    course.save()
      .then(() => res.redirect(`/`))
      .catch(err => {
        next(err)
      })
  }

}

module.exports = new CourseController();
