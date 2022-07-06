const user = require("../model/UserModel");

class UserController {
  login(req, res) {
    res.render("cus_login", {
      layout: "customer_layout",
    });
  }
  postLogin(req, res) {
    user.login(req.body);
    res.redirect("/");
  }
  register(req, res) {
    res.render("cus_register", {
      layout: "customer_layout",
    });
  }
  postRegister(req, res) {
    Promise.all([user.register(req.body)])
      .then(([data]) => res.redirect("/user/login"))
      .catch(next);
    const data = user.register(req.body);
    console.log(data);
    res.redirect("/user/login");
  }
  logout() {
    user.logout();
    res.redirect("/");
  }
}

module.exports = new UserController();