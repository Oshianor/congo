const routes = require('next-routes')


module.exports = routes()
  .add("index", "/")
  .add("login", "/login")
  .add("register", "/register")
  .add("dashboard", "/dashboard/in")
  .add("user", "/dashboard/users")
  .add("account", "/dashboard/account")
  .add("event", "/dashboard/events")
  .add("media", "/dashboard/media")
  .add("sermons", "/dashboard/sermons")
  .add("devotion", "/dashboard/devotion")
  .add("prayRequest", "/dashboard/prayer-request")
  .add("mediaCollection", "/dashboard/media/:collectionName")
  .add("support", "/dashboard/support");
