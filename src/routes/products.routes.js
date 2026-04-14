const express = require('express')
const router = express.Router()

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/products.controller')

router.get('/', getProducts)
router.post('/', createProduct)
router.put('/', updateProduct)
router.delete('/', deleteProduct)

module.exports = router