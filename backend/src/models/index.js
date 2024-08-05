const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/config.json');

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  dialect: config.development.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Ensure models are correctly loaded
db.User = require('./user')(sequelize, DataTypes);
db.Address = require('./address')(sequelize, DataTypes);

// Define associations
db.User.hasMany(db.Address, { foreignKey: 'userId' });
db.Address.belongsTo(db.User, { foreignKey: 'userId' });

module.exports = db;
