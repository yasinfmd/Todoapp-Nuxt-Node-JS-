module.exports = (sequelize, DataType) => {
    return sequelize.define("user", {
        userid: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstname: {
            type: DataType.STRING,
            allowNull: false,
        },
        surname: {
            type: DataType.STRING,
            allowNull: false,
        },
        username: {
            type: DataType.STRING,
            allowNull: false,
            validation: {
                isEmail: true
            }
        },
    })
}