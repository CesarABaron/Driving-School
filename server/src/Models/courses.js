const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('courses',{
        id:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        courseName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        originalPrice:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        fridayPrice:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        blackFriday:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:false
        }
    },
    { timestamps: false })
}