const Product = require('../models/products')
const Provider = require('../models/providers')

// GET - obtener todos los productos con populate
const getProducts = async (req, res) => {
  const products = await Product.find().populate('provider')
  res.status(200).json(products)
}

// POST - crear producto
const createProduct = async (req, res) => {
  const { title, price, description, company_name } = req.body

  const providerFound = await Provider.findOne({ company_name: company_name })

  const newProduct = new Product({
    title,
    price,
    description,
    provider: providerFound._id
  })

  const savedProduct = await newProduct.save()

  res.status(201).json({
    message: 'producto creado',
    product: savedProduct
  })
}

// PUT - actualizar producto
const updateProduct = async (req, res) => {
  const { title, price, description, company_name } = req.body

  const providerFound = await Provider.findOne({ company_name: company_name })

  const updatedProduct = await Product.findOneAndUpdate(
    { title: title },
    {
      price,
      description,
      provider: providerFound._id
    },
    { new: true }
  )

  res.status(200).json({
    message: `producto actualizado: ${updatedProduct.title}`,
    product: updatedProduct
  })
}

// DELETE - borrar producto
const deleteProduct = async (req, res) => {
  const { title } = req.body

  await Product.findOneAndDelete({ title })

  res.status(200).json({
    message: `Se ha borrado el producto: ${title}`
  })
}

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
}