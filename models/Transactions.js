const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Transaction extends Model {}

Transaction.init(
  {
    date: {
      type: DataTypes.DATEONLY
    },
    category: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    amount: {
      type: DataTypes.DOUBLE        // amount won't always be an integer
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'transaction'
  }
);

module.exports = Transaction;
