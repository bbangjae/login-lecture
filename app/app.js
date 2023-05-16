// !!!! http 로 띄우기 => 복잡함
// const http = require("http");
//   // 따로 한글 인코딩도 해야함.. (복자함)
// const app = http.createServer((req,res)=>{
//   if(req.url==="/"){
//     res.end("여기는 루트입니다.");
//   }else if(req.url=== "/login"){
//     res.end("여기는 로그인 화면입니다.")
//   }
// });


// !!! html 파일을 불러와서 화면에 보일수있음
// app.get('/',(req,res)=>{
//   res.send(`
//   <!DOCTYPE html>
//   <html lang="ko"> 
//   <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Document</title>
//   </head>
//   <body>
//       <input type="text" placeholder="아이디"><br>
//       <input type="text">
//       <button>로그인</button><br>

//   </body>
//   </html>
// `);
// })

// 처음 실행 ( router를 통해 더 간단하게 수정 가능)
// app.get("/",(req,res)=>{
//   res.render("home/index"); // view는 설정했기에 따로 안적음
// }) ; 

// app.get("/login",(req,res)=>{
//   res.render("home/login"); // view는 설정했기에 따로 안적음
// }) ; 

const express = require('express');
const app = express();

// 라우팅
const home = require("./src/routes/home"); //해당폴더있는 자바스크립트를 읽어옴 

//앱 세팅
app.set("views","./src/views");
app.set("view engine", "ejs");


app.use("/",home);  // use-> 미들웨어를 등록해주는 메서드



module.exports=app; //bin에서 받을려면 내보내줘야 받을 수 있음!! 