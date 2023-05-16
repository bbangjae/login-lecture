"use strict"; // 해당 문법을 준수하겠다 (js 적기전에)

const express = require( "express");
const router = express.Router();


const ctrl = require("./home.ctrl")
router.get("/",ctrl.home) ; 
  
router.get("/login",ctrl.login) ; 

module.exports =router; // 라우터로 나보내기
