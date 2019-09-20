const routes = require('next-routes')


module.exports = routes()
  .add("index", "/")
  .add("login", "/login")
  .add("signup", "/signup")
  .add("mailverification", "/mailverification")
  .add("mailverificationsent", "/mailverificationsent")
  .add("dashboard", "/dashboard/in")
  .add("dgda", "/dashboard/dgda")
  .add("dgi", "/dashboard/dgi")
  .add("dgrad", "/dashboard/dgrad")
  .add("dgrk", "/dashboard/dgrk")
  .add("reports", "/dashboard/report");
