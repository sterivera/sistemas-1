const express= require("express");
const ControlAuth = require("../controllers/auth");

const api = express.Router();

api.post("/auth/register",ControlAuth.register);
api.post("/auth/login",ControlAuth.login);

module.exports = api;

