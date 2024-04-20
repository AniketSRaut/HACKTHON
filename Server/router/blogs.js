const express = require('express') 
const router = express.Router();

const db = require('../db')
const utils = require('../utils')

router.get('/getAllBlogs',(req,res)=>{


    const statement = `select user.userId userId ,blogId , blogs.title blogTitle , categories.title categoryTitle, 
    blogs.createdTime ,user.fullName from blogs , categories , user where user.userId = blogs.userId and 
    blogs.categoryId = categories.categoryId and blogs.isDelete= 0 ;`

    db.pool.query(statement,(error,result)=>{
        if(error){
            res.send(utils.createErrorResult(error))
        }else{
            res.send(utils.createSuccessResult(result))
        }
    })
})


router.post('/findBlog',(req,res)=>{

    const {searchKey} = req.body
    console.log("id is ",searchKey)
    const statement = `select user.userId, blogId , blogs.title blogTitle , 
    categories.title categoryTitle, blogs.createdTime ,user.fullName from blogs , 
    categories , user where user.userId = blogs.userId and blogs.categoryId = categories.categoryId 
    AND blogs.isDelete = 0 AND (blogs.title LIKE '%${searchKey}%' OR categories.title like '%${searchKey}%');`

    db.pool.query(statement,(error,result)=>{
        if(error){
            res.send(utils.createErrorResult(error))
        }else{
            res.send(utils.createSuccessResult(result))
        }
    })
})



router.post('/myBlog/',(req,res)=>{

    const {loginId} = req.body
    // console.log("id is ",searchKey)
    const statement = `select user.userId, blogId , blogs.title blogTitle , 
    categories.title categoryTitle, blogs.createdTime ,user.fullName from blogs , 
    categories , user where user.userId = blogs.userId and blogs.categoryId = categories.categoryId 
    AND blogs.isDelete = 0 AND user.userId = ? ;`

    db.pool.execute(statement,[loginId],(error,result)=>{
        if(error){
            res.send(utils.createErrorResult(error))
        }else{
            res.send(utils.createSuccessResult(result))
        }
    })
})


router.post('/newBlog',(req,res)=>{

    const {title , contents , userId , categoryId } = req.body
    // console.log("id is ",searchKey)
    const statement = `insert into blogs ( title , contents , userId , categoryId )
     values (?,?,?,?);`
    db.pool.query(statement,[title , contents , userId , categoryId],(error,result)=>{
        if(error){
            res.send(utils.createErrorResult(error))
        }else{

            res.send(utils.createSuccessResult("Blog added successfully......"))

        }
    })
})



router.get('/getBlogById/:id',(req,res)=>{
    const {id}= req.params

    const statement = `select blogId, blogs.title blogTitle , categories.title categoriesTitle ,  contents from blogs , 
    categories where blogs.categoryId = categories.categoryId and blogs.blogId = ? ; `

    db.pool.query(statement,[id],(error,result)=>{
        if(error){
            res.send(utils.createErrorResult(error))
        }else{
            const data = result[0] 
            res.send(utils.createSuccessResult(data))
        }
    })
})


router.put('/editBlog/:id',(req,res)=>{
    const {id}= req.params

    const { title , contents , userId , categoryId } =req.body

    // insert into blogs ( title , contents , userId , categoryId )

    // const{proName , proPrice}= req.body
    const statement = `update blogs set title = ? , contents = ?,
     userId = ?, categoryId = ? where blogId = ?;`

    db.pool.execute(statement,[title , contents , userId , categoryId , id],(error,result)=>{
        if(error){
            res.send(utils.createErrorResult(error))
        }else{
            res.send(utils.createSuccessResult(" Updated Blog  Successfully ... "))
        }
    })
})



router.put('/deleteBlog/:id',(req,res)=>{
    const {id}= req.params

    const statement = `update blogs set isDelete = 1 where blogId = ?;`

    db.pool.execute(statement,[id],(error,result)=>{
        if(error){
            res.send(utils.createErrorResult(error))
        }else{
            res.send(utils.createSuccessResult(" Deleted Successfully ... "))
        }
    })
})









module.exports = router