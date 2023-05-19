"use strict"

const id = document.querySelector("#id"),
     pw = document.querySelector("#pw"),
     btn = document.querySelector("button")

     
     

     function login() {
        const req = {

            id:id.value ,
            pw: pw.value
        };
        console.log(req.id);
         
    }
    btn.addEventListener("click",login);

// console.log(id);zz