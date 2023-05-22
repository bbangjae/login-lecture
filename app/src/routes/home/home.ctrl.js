// mvc의 controller 에 해당함
const users={
  id:["dudwo","개발"],
  pw:["1234","123"],
};
const output ={
   home:(req,res)=>{
    res.render("./home/index"); 
  },

  login :(req,res)=>{
    res.render("./home/login");
  },

};
const process = {
  login : (req, res) => {
    const id=req.body.id,
    pw=req.body.pw;
    
    if(users.id.includes(id)){
      const idx = users.id.indexOf(id);
      if(users.pw[idx]===pw){
        return res.json({ //프론트에 떤짐
          success : true, // success :true 라는 object를 떤져줌
        })
      }
    }
    return res.json({
      success:false,
      msg:"로그인에 실패",
    })
  },
}

  // object  키와 value의 값인데 키만 키만 넣으면 벨류는 키와 같은값으로 넣음
  module.exports={ //index에서 사용하기위해 빼줌
    output, 
    process,
  }; 

