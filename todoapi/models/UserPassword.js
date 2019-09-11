module.exports = (sequelize, DataType) => {
    return sequelize.define("userpassword", {
        pswid: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userpass: {
            type: DataType.STRING,
            allowNull: false,
            required: true,
            len: [8, 100]
        },
    })
}