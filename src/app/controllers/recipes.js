
module.exports = {
  index(req, res) {
    return res.render('admin/recipes/index')
  },
  create(req, res) {
    return res.render('admin/recipes/create')
  },
  post(req, res) {
    res.redirect('admin/recipes/show')
  },
  show(req, res) {
    return res.render('admin/recipes/show')
  },
  edit(req, res) {
    return res.render('admin/recipes/edit')
  },
  put(req, res) {
    return res.redirect('admin/recipes/show')
  },
  delete(req, res) {
    return res.redirect('admin/recipes')
  },
}
