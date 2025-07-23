const express = require ("express");
const UserControlador = require("../controllers/user")

const api = express.Router();

api.get("/user/me", UserControlador.getMe);

module.exports = api;