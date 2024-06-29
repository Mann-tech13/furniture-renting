const router = require("express").Router();
const { getFurniture, getFurnitureList, addFurniture } = require('../services/furniture.js')

router.get('/list', getFurnitureList)
router.post('/add', addFurniture)
router.get('/:id', getFurniture)


module.exports = router;