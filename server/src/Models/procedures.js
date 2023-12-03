const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('procedures',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement:true
        },
        basado:{
            type:DataTypes.STRING,
            allowNull:false
        },
        zzz:{
            type:DataTypes.STRING,
            allowNull:false
        }
        
    },
    { timestamps: false })
}