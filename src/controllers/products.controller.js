const Provider = require('../models/Providers')
const Product = require('../models/Products')

// GET - obtener todos los productos con populate
const getProducts = async (req, res) => {
  const products = await Product.find().populate('provider')
  res.status(200).json(products)
}

const createProduct = async (req, res) => {
  try {
    const { title, price, description, provider } = req.body;

    const providerFound = await Provider.findById(provider);

    if (!providerFound) {
      return res.status(404).json({
        message: 'Provider no encontrado'
      });
    }

    const newProduct = new Product({
      title,
      price,
      description,
      provider: providerFound._id
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({
      message: 'Producto creado',
      product: savedProduct
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al crear el producto',
      error: error.message
    });
  }
};

// Aqui actualizamos producto
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

// Borramos producto
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