const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/:id', userController.getUser);
router.get('/', userController.searchUsers);

module.exports = router;
