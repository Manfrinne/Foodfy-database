
const Recipe = require('../models/recipe')

module.exports = {
  index(req, res) {

    Recipe.all(function(recipes) {

      return res.render('recipes/index', {recipes})

    })

  },

  create(req, res) {

    Recipe.chefSelectOption(function(option) {
      return res.render('recipes/create', {chefOption: option})
    })

  },

  post(req, res) {

    const keys = Object.keys(req.body)
    for (key of keys) {
      if (req.body[key] == "") {
        return res.send('Please, fill in all fields.')
      }
    }

    Recipe.create(req.body, function() {
      return res.redirect(`recipes`)
    })

  },

  show(req, res) {

    Recipe.find(req.params.id, function(recipe) {
      if(!recipe) return res.send("Recipee NOT found!")

      return res.render("recipes/show", { recipe })
    })

  },

  edit(req, res) {

    Recipe.find(req.params.id, function(recipe) {
      if(!recipe) return res.send("Recipee NOT found!")

      Recipe.chefSelectOption(function(option) {

        return res.render("recipes/edit", { recipe, chefOption: option })
      })

    })

  },

  put(req, res) {

    const keys = Object.keys(req.body)
    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill in all fields.')
        }
    }

    Recipe.update(req.body, function() {

      return res.redirect(`recipes/${req.body.id}`)

    })

  },

  delete(req, res) {

    Recipe.delete(req.body.id, function() {

      return res.redirect('recipes')

    })

  }
}
