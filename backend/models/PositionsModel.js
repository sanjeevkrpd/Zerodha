const mongoose = require('mongoose')
const {PositionSchema} = require("../schema/PositionsSchema");

const PositionsModel = new mongoose.model("Position" , PositionSchema );

module.exports = {PositionsModel};