
const Chef = require('../models/chef')

module.exports = {
  index(req, res) {

    Chef.all(function(chefs) {

      return res.render('chefs/index', {chefs})

    })

  },

  create(req, res) {
    return res.render('chefs/create')
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

      Chef.findRecipes(req.params.id, function(recipes) {

        return res.render("chefs/show", { chef, recipes })

      })
    })

  },

  edit(req, res) {

    Chef.find(req.params.id, function(chef) {
      if(!chef) return res.send("Chefe NOT found!")

      return res.render("chefs/edit", { chef })
    })

  },

  put(req, res) {

    const keys = Object.keys(req.body)
    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill in all fields.')
        }
    }

    Chef.update(req.body, function() {

      return res.redirect(`chefs/${req.body.id}`)

    })

  },

  delete(req, res) {

    Chef.delete(req.body.id, function() {

      return res.redirect('chefs')

    })

  }
}
