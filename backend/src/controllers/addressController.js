const models = require("../models")

const Address = models.Address

exports.getAddress = async (req, res) => {
  const { id } = req.params;
  try {
    const address = await Address.findByPk(id);
    if (address) {
      res.json(address);
    } else {
      res.json([]);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller to add a new address
exports.addAddress = async (req, res) => {
  const { userId, street, city, state, postal_code, country } = req.body;
  try {
    const address = await Address.create({ userId, street, city, state, postal_code, country });
    res.status(201).json(address);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller to get all addresses for a user
exports.getAddressesByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const addresses = await Address.findAll({ where: { userId } });
    if (addresses.length > 0){
      res.json(addresses);
    }
    else{
      res.json([])
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller to update an address
exports.updateAddress = async (req, res) => {
  const { id } = req.params;
  const { street, city, state, postal_code, country } = req.body;
  try {
    const address = await Address.findByPk(id);
    if (address) {
      address.street = street;
      address.city = city;
      address.state = state;
      address.postal_code = postal_code;
      address.country = country;
      await address.save();
      res.json(address);
    } else {
      res.status(404).json({ error: 'Address not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller to delete an address
exports.deleteAddress = async (req, res) => {
  const { id } = req.params;
  try {
    const rowsDeleted = await Address.destroy({ where: { id } });
    if (rowsDeleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Address not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
