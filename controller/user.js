const  {User}  = require('../modelss/user');
// import { RequestHandler } from "express";
// Create a new user
// const { User } = require('../models');

exports.createUser = async (req, res) => {
  try {
    console.log('User model:', User); // Debug statement
    if (!User || typeof User.create !== 'function') {
      throw new Error('User model is not initialized properly');
    }

    const { firstName, lastName, email, passwordHash } = req.body;
    const newUser = await User.create({ firstName, lastName, email, passwordHash });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: error.message });
  }
};

console.log("eRorrrr")


exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.params;


    if (!id || isNaN(id)) {
      return res.status(400).json({ success: false, message: 'Invalid user ID' });
    }


    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    return res.status(200).json({ success: true, user });
  } catch (error) {
    next(error); 
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, passwordHash } = req.body;

    if (!id || isNaN(id)) {
      return res.status(400).json({ success: false, message: 'Invalid user ID' });
    }

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }


    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    user.passwordHash = passwordHash || user.passwordHash;

    await user.save();
    return res.status(200).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};


exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({ success: false, message: 'Invalid user ID' });
    }

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    await user.destroy();
    return res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};
