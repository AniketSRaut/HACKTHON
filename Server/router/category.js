const express = require('express') 
const router = express.Router();

const db = require('../db')
const utils = require('../utils')


router.get('/getAllCategory',(req,res)=>{

    const statement = ` select * from categories ; `

    db.pool.query(statement,(error,result)=>{
        if(error){
            res.send(utils.createErrorResult(error))
        }else{
            
            res.send(utils.createSuccessResult(result))
        }
    })
})




router.delete('/deleteCategory/:id',(req,res)=>{
    const {id}= req.params

    const statement = `update categories set isDelete = 1 where categoryId = ?;`

    db.pool.query(statement,[id],(error,result)=>{
        if(error){
            res.send(utils.createErrorResult(error))
        }else{
            
            res.send(utils.createSuccessResult(" Delete category successfully ...."))
        }
    })
})



router.put('/editCategory/:id',(req,res)=>{
    const {id}= req.params

    const { title , description} =req.body


    const statement = `update categories set title = ? , description = ? where categoryId = ?;`

    db.pool.execute(statement,[title , description , id ],(error,result)=>{
        if(error){
            res.send(utils.createErrorResult(error))
        }else{
            res.send(utils.createSuccessResult(" Updated Category  Successfully ... "))
        }
    })
})

module.exports = router