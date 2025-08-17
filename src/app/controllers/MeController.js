const Course = require('../models/Course')
const { multipleMogooseToObject } = require('../../utils/mogoose')
class MeController {

  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted({})])
      .then(([courses, deletedCount]) => res.render('me/stored-courses', {
        deletedCount,
        courses: multipleMogooseToObject(courses),
      }))
      .catch(next);

    // Course.countDocumentsDeleted({})
    //   .then((deletedCount) =>
    //     console.log('Trash courses:', deletedCount)
    //   )
    //   .catch(next);

    // Course.find({})
    //   .then((courses) =>
    //     res.render('me/stored-courses', {
    //       courses: multipleMogooseToObject(courses),
    //     }),
    //   )
    //   .catch(next);
  }

  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) => {
        res.render('me/trash-courses', {
          courses: multipleMogooseToObject(courses),
        });
        // res.json(courses);   // Xuất thẳng ra JSON thay vì render hbs
      })
      .catch(next);
  }
}

module.exports = new MeController();
