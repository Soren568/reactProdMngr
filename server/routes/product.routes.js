const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/products/", ProductController.findAllProducts);
    app.get("/api/products/:id", ProductController.findOneProduct);
    app.put("/api/products/:id", ProductController.updateProduct);
    app.post("/api/products/new", ProductController.createProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);
};