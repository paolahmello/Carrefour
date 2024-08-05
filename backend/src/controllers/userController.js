const models = require("../models")

const User = models.User
const Address = models.Address

exports.searchUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addUser = async (req, res) => {
  const { name, surname, cpf, date_of_birth, addresses } = req.body;
  try {
    const user = await User.create({ name, surname, cpf, date_of_birth });
    if (addresses) {
      addresses.forEach(async (address) => {
        await Address.create({ ...address, userId: user.id });
      });
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, surname, cpf, date_of_birth } = req.body;
  try {
    const user = await User.findByPk(id);
    if (user) {
      user.name = name;
      user.surname = surname;
      user.cpf = cpf;
      user.date_of_birth = date_of_birth;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await Address.destroy({ where: { userId: id } });
    await User.destroy({ where: { id } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

