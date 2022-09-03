const sequelize = require('../config/connection');
const { User , Transaction } = require('../models');

const userData = require('./userData.json');
const transactionData = require('./transactionData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const transaction of transactionData) {
    await Transaction.create({
      ...transaction,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
