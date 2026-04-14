const express = require('express')
const router = express.Router()

const {
  getProviders,
  createProvider,
  updateProvider,
  deleteProvider
} = require('../controllers/providers.controller')

router.get('/', getProviders)
router.post('/', createProvider)
router.put('/', updateProvider)
router.delete('/', deleteProvider)

module.exports = router