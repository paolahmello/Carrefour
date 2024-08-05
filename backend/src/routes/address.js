const express = require('express');
const addressController = require('../controllers/addressController');
const router = express.Router();

router.post('/', addressController.addAddress);
router.put('/:id', addressController.updateAddress);
router.delete('/:id', addressController.deleteAddress);
router.get('/:id', addressController.getAddress);
router.get('/user/:userId', addressController.getAddressesByUserId);

module.exports = router;
