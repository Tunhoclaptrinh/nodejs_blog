module.exports = {
  multipleMogooseToObject: function (mogooseArrs) {
    return mogooseArrs.map(mogooseArr => mogooseArr.toObject())
  },
  mogooseToObject: function (mogooseObj) {
    return mogooseObj.toObject()
  }
}
