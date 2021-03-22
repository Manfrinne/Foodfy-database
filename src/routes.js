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
routes.get('/client/recipe', client.showRecipe)
routes.get('/client/chefs', client.listChefs)


// ADMIN CHEFS
routes.get('/admin/chefs', chefs.index)
routes.get('/admin/chefs/create', chefs.create)
routes.post('/admin/chefs', chefs.post)
routes.get('/admin/chefs/:id', chefs.show)
routes.get('/admin/chefs/:id/edit', chefs.edit)
routes.put('/admin/chefs', chefs.put)
routes.delete('/admin/chefs', chefs.delete)

// ADMIN RECIPES
routes.get('/admin/recipes', recipes.index)
routes.get('/admin/recipes/create', recipes.create)
routes.post('/admin/recipes', recipes.post)
routes.get('/admin/recipes/show', recipes.show)
routes.get('/admin/recipes/edit', recipes.edit)
routes.put('/admin/recipes', recipes.put)
routes.delete('/admin/recipes', recipes.delete)





module.exports = routes
