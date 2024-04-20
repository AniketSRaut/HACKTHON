const express = require("express");
const crypto = require("crypto-js");

const router = express.Router();

const mysql = require("mysql2");
const db = require("../db");
const utils = require("../utils");

router.get("/getAllUser", (req, res) => {
  const statement = `select * from user`;

  db.pool.execute(statement, (error, data) => {
    res.send(utils.createResult(error, data));
  });
});






router.post("/userLogin", (request, response) => {
  const statement = `select userId , fullName from user where email = ? and password = ?;`;

  const { email, password } = request.body;

  const cryptoPass = String(crypto.SHA224(password));

  db.pool.execute(statement, [email, cryptoPass], (error, result) => {
    if (error) {
      response.send(utils.createErrorResult(error));
    } else {

      const user = result[0]

      if(result.length==0){

      response.send(utils.createErrorResult("User does not exit"));

      }else{




            const userData={
              loginId : result[0].userId,
              loginName : result[0].fullName,
            }

  
          response.send(utils.createSuccessResult(result[0]));
  
        }

      

     
    }
  });
});





// create table user (userID int primary key auto_increment, fullName varchar(50),
// email varchar(50),password varchar(150),phoneNo varchar(15),createdTime datetime default CURRENT_TIMESTAMP);

router.post('/registerUser',(req,res)=>{
    const statement = `insert into user  (fullName ,email , password, phoneNo) values (?,?,?,?); `

    const {fullName ,email , password, phoneNo}= req.body

    const pass = String(crypto.SHA224(password))

    db.pool.execute(statement,[fullName ,email , pass, phoneNo],(error,data)=>{

        if(error){
            res.send(utils.createErrorResult(error))
        }else{
            res.send(utils.createSuccessResult("User Registered successfully..."))
        }

    })
})

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const statement = `update user set isDelete = 1 where id = ?;`;
  db.pool.execute(statement, [id], (error, data) => {

    res.send(utils.createSuccessResult("User Deleted successfully...."));

  });
});


module.exports = router;
