"use strict"


class UserStorage{
    
   static #users = {  //클래스안에 변수선언시 const 필요x
        id:["dudwo","개발"],
        pw:["1234","123"],
        name:["우리밋","가나다"]
    };
    static getUsers(...fields){ //클래스안에 변수를 가져올라면 static 붙여야함!!
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field]=users[field];
            }
            return newUsers;
        },{});
        return newUsers;
        
    }
}

module.exports = UserStorage; 