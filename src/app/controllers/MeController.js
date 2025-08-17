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

  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) => {
        console.log('Trash courses:', courses);   // 👈 in ra console
        res.render('me/trash-courses', {
          courses: multipleMogooseToObject(courses),
        });
        // res.json(courses);   // Xuất thẳng ra JSON thay vì render hbs
      })
      .catch(next);
  }
}

module.exports = new MeController();
