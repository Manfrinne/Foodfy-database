
module.exports = {
  index(req, res) {
    return res.render('admin/chefs/index')
  },
  create(req, res) {
    return res.render('admin/chefs/create')
  },
  post(req, res) {
    res.redirect('admin/chefs/show')
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
