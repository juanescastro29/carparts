const { Schema, model } = require("mongoose")

const productSchema = new Schema({
  name: {type: String, required: true},
  category: {type: String, required: true},
  brand: {type: String, required: true},
  image: {type: String, require: true},
  value: {type: Number, required: true},
  stock: {type: Number, required: true}
}, {
  timestamps: true,
  versionKey: false
})

module.exports = model("Product", productSchema)