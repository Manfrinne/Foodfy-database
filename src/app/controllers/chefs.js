
const Chefs = require('../models/chefs')

module.exports = {
  index(req, res) {

    Chefs.all(function(chefs) {

      return res.render('admin/chefs/index', {chefs})

    })

  },

  create(req, res) {
    return res.render('admin/chefs/create')
  },

  post(req, res) {

    const keys = Object.keys(req.body)
    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill in all fields.')
        }
    }

    Chefs.create(req.body, function(chefs) {
      return res.redirect(`chefs`)
    })

  },

  show(req, res) {
    return res.render('admin/chefs/show')
  },

  edit(req, res) {
    return res.render('admin/chefs/edit')
  },

  put(req, res) {
    return res.redirect('admin/chefs/show')
  },

  delete(req, res) {
    return res.redirect('admin/chefs')
  },
}
