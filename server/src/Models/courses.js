const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('courses',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement:true
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