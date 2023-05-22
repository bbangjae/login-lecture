"use strict"

// 프론트를 만드는부분 (ejs랑 연결되어있음)

const id = document.querySelector("#id"),
     pw = document.querySelector("#pw"),
     btn = document.querySelector("button");
     btn.addEventListener("click",login);
    
    function login() {
    const req = {

        id:id.value,
        pw: pw.value,
    };
    
    fetch("/login",{
        method : "POST",
        headers:{
            "Content-Type" : "application/json" //json으로 보낸다고 명시
        },
        body: JSON.stringify(req),
    })
    .then((res)=>res.json())
    // .then((res) => console.log(res)); // 프로미스로 받는데 json으로 받기위해 한번더 받음
    .then((res) =>{
        if(res.succss){ //true 받으닌깐 자동 성공
            location.href="/";
        }
        else{
            alert(res.msg);
        }
    })
    .catch((err)=>{
        // console.error(new Error("로그인에러"))// 두가지
        console.error("로그인에러") 
    });
    }
