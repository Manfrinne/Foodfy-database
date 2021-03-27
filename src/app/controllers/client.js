
const Recipe = require('../models/recipe')
const Chef = require('../models/chef')

module.exports = {
  index(req, res) {
    Recipe.all(function(recipes) {

      return res.render('client/index', {recipes})

    })
  },

  about(req, res) {
    return res.render('client/about')
  },

  listRecipes(req, res) {
    Recipe.all(function(recipes) {

      return res.render('client/recipes', {recipes})

    })
  },

  showRecipe(req, res) {
    Recipe.find(req.params.id, function(recipe) {
      if(!recipe) return res.send("Recipe NOT found!")

      return res.render("client/recipe", { recipe })
    })

  },

  listChefs(req, res) {
    Chef.chefClientList(function(chefs) {

      return res.render('client/chefs', { chefs })

    })

  }
}
