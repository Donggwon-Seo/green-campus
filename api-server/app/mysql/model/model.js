module.exports = (sequelizeConfig, Sequelize) => {
    // Set Model
    const Sensor = sequelizeConfig.define(
        'sensor',
        {
            sensor_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            location : {
                type: Sequelize.STRING,
                allowNull: false,
            },
            value: {
                type: Sequelize.DOUBLE,
                allowNull: false,
                // unique: true,
            }
        }
    );

    return Sensor;
};