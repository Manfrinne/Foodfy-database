const express = require('express')
const routes = express.Router()
const chefs = require('./app/controllers/chefs')
const recipes = require('./app/controllers/recipes')
const client = require('./app/controllers/client')


routes.get('/', function(req, res) {
  return res.redirect('client')
})

//CLIENTS
routes.get('/client', client.index)
routes.get('/client/about', client.about)
routes.get('/client/recipes', client.listRecipes)
routes.get('/client/recipes/:id', client.showRecipe)
routes.get('/client/chefs', client.listChefs)


// ADMIN CHEFS
routes.get('/chefs', chefs.index)
routes.get('/chefs/create', chefs.create)
routes.post('/chefs', chefs.post)
routes.get('/chefs/:id', chefs.show)
routes.get('/chefs/:id/edit', chefs.edit)
routes.put('/chefs', chefs.put)
routes.delete('/chefs', chefs.delete)

// ADMIN RECIPES
routes.get('/recipes', recipes.index)
routes.get('/recipes/create', recipes.create)
routes.post('/recipes', recipes.post)
routes.get('/recipes/:id', recipes.show)
routes.get('/recipes/:id/edit', recipes.edit)
routes.put('/recipes', recipes.put)
routes.delete('/recipes', recipes.delete)





module.exports = routes
