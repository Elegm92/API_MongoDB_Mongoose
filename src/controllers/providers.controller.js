const Provider = require('../models/Providers')
const Product = require('../models/Products')

//Obtener todos los providers
const getProviders = async (req, res) => {
  const providers = await Provider.find()
  res.status(200).json(providers)
}

// Crear provider
const createProvider = async (req, res) => {
  const newProvider = new Provider(req.body)
  const savedProvider = await newProvider.save()

  res.status(201).json({
    message: 'proveedor creado',
    provider: savedProvider
  })
}

// Actualizar provider
const updateProvider = async (req, res) => {
  const { company_name, CIF, address, url_web } = req.body

  const updatedProvider = await Provider.findOneAndUpdate(
    { company_name: company_name },
    { CIF, address, url_web },
    { new: true }
  )

  res.status(200).json({
    message: `proveedor actualizado: ${updatedProvider.company_name}`,
    provider: updatedProvider
  })
}

// Borrar provider
const deleteProvider = async (req, res) => {
  const { company_name } = req.body

  const providerToDelete = await Provider.findOne({ company_name })

  const productsRelated = await Product.find({ provider: providerToDelete._id })

  if (productsRelated.length > 0) {
    return res.status(400).json({
      message: 'No se puede borrar el proveedor porque tiene productos asociados'
    })
  }

  await Provider.findOneAndDelete({ company_name })

  res.status(200).json({
    message: `Se ha borrado el proveedor: ${company_name}`
  })
}

module.exports = {
  getProviders,
  createProvider,
  updateProvider,
  deleteProvider
}