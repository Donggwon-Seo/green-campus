const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      value: {
        type: Sequelize.DOUBLE.UNSIGNED,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Sensor',
      tableName: 'sensors',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {}
};