const express = require('express');
const { createUser, getUser, updateUser } = require('../controller/user');
const router = express.Router();


router.post('/users', createUser);


// router.get('/users/:id', getUser);


// router.put('/users/:id', updateUser);

module.exports = router;
