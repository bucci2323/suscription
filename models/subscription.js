module.exports = (sequelize, DataTypes) => {
    const Subscription = sequelize.define('Subscription', {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending'
      },
      paymentReference: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {});
    
    return Subscription;
  };
  