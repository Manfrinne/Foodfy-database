
module.exports = {
  index(req, res) {
    return res.render('client/index')
  },
  about(req, res) {
    return res.render('client/about')
  },
  listRecipes(req, res) {
    return res.render('client/recipes')
  },
  showRecipe(req, res) {
    return res.render('client/recipe')
  }
}
