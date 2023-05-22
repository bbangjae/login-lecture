// mvc의 controller 에 해당함

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
    console.log(req.body);// 프론트에서 받은 데이터
  },
}

  // object  키와 value의 값인데 키만 키만 넣으면 벨류는 키와 같은값으로 넣음
  module.exports={ //index에서 사용하기위해 빼줌
    output, 
    process,
  }; 

