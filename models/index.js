const User = require('./user');
const Transaction = require('./Transactions')

User.hasMany(Transaction, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Transaction.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Transaction };
