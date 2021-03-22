
const Chef = require('../models/chef')

module.exports = {
  index(req, res) {

    Chef.all(function(chefs) {

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

    Chef.create(req.body, function() {
      return res.redirect(`chefs`)
    })

  },

  show(req, res) {

    Chef.find(req.params.id, function(chef) {
      if(!chef) return res.send("Chefe NOT found!")

      return res.render("admin/chefs/show", { chef })
    })

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
