const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())


const userRouter = require('./router/user')
const pRouter = require('./router/product')
const blogRouter = require('./router/blogs')
const catRouter = require('./router/category')

app.use('/user',userRouter)
app.use('/blogs',blogRouter)
app.use('/product',pRouter)
app.use('/category',catRouter)


app.listen(4000, '0.0.0.0',()=>{
    console.log('Server Started....')
})