const shop = require("../model/ShopModel");

class ShopController {
  index(req, res, next) {
    Promise.all([shop.allproducts()])
      .then(([products]) =>
        res.render("cus_index", {
          layout: "customer_layout",
          products: products,
        })
      )
      .catch(next);
  }

  shopgrid(req, res) {
    res.render("cus_shop-details", {
      layout: "customer_layout",
    });
  }

  cart(req, res) {
    res.render("cus_shoping-cart", {
      layout: "customer_layout",
    });
  }

  shopingCartHistory(req, res) {
    res.render("cus_shoping-cart-history", {
      layout: "customer_layout",
    });
  }

  checkout(req, res) {
    res.render("cus_checkout", {
      layout: "customer_layout",
    });
  }

  shopnear(req, res) {
    res.render("cus_nearest-shop", {
      layout: "customer_layout",
    });
  }

  shopDetails1(req, res) {
    res.render("cus_shop-details-not-exists", {
      layout: "customer_layout",
    });
  }

  itemDetail(req, res, next) {
    shop.getProduct([req.params.id]).then((product) =>
      res.render("cus_item-detail", {
        layout: "customer_layout",
        product: product,
      })
    );
  }
}

module.exports = new ShopController();
