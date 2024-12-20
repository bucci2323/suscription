module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      tableName: 'users', // Match your table name in the database
      timestamps: true,   // Ensure timestamps are included if your migration includes them
    });
  
    return User;
  };
  