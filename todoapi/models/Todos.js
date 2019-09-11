module.exports = (sequelize, DataType) => {
    return sequelize.define('usertodo', {
        todoid: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        todoname: {
            type: DataType.STRING,
            allowNull: false,

        },
        todocomplated: {
            type: DataType.BOOLEAN,
            allowNull: false,
        },
    })
}