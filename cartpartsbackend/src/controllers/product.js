const productoCtrl = {};

const Product = require("../models/product");

productoCtrl.getProducts = async (req, res) => {
  const data = await Product.find({});
  res.json(data);
};

productoCtrl.createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    await newProduct.save();
    res.json({ message: "Product created" });
  } catch (error) {
    res.json({ message: "Error created product" });
  }
};

productoCtrl.getProduct = async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.json({message: error})
  }
};

productoCtrl.updateProduct = async (req, res) => {
  try {
    const productFound = await Product.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json({ message: "Product updated" });
  } catch (error) {
    res.json({ message: error });
  }
};

productoCtrl.deleteProduct = async (req, res) => {
  try {
    const productDeleted = await Product.findByIdAndRemove(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = productoCtrl;
