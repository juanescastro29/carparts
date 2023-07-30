const { Router } = require("express")
const router = Router()

const productsCtrl = require("../controllers/product")

router.get("/", productsCtrl.getProducts)

router.post("/", productsCtrl.createProduct)

router.get("/:id", productsCtrl.getProduct)

router.put("/:id", productsCtrl.updateProduct)

router.delete("/:id", productsCtrl.deleteProduct)

module.exports = router;