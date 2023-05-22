"use strict"


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
        body: JSON.stringify(req)
    });
};