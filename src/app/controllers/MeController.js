const Course = require('../models/Course')
const { multipleMogooseToObject } = require('../../utils/mogoose')
class MeController {

  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render('me/stored-courses', {
          courses: multipleMogooseToObject(courses),
        }),
      )
      .catch(next);
  }
}

module.exports = new MeController();
