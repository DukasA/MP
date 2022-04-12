const sequelize = require('../db');
const {DataTypes} = require('sequelize');


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: ""}
});

const Post = sequelize.define('post', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull:false},
    text: {type: DataTypes.TEXT, allowNull:false},
    img: {type: DataTypes.STRING,allowNull:false }
});

const Slider = sequelize.define('slide', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull:false},
    text: {type: DataTypes.TEXT, allowNull:false},
    link: {type: DataTypes.STRING, allowNull:false},
    img: {type: DataTypes.STRING,allowNull:false }
});

module.exports = {
    User,
    Post,
    Slider
};