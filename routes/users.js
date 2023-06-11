const express = require('express');

const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserData,
  updateUserAvatar,
  loginUser,
} = require('../controllers/users');

router.post('/signup', createUser);
router.post('/signin', loginUser);

router.get('/users', getAllUsers);
router.get('/users/:userId', getUserById);
router.patch('/users/me', updateUserData);
router.patch('/users/me/avatar', updateUserAvatar);

module.exports = router;
