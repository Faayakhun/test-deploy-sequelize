const express = require('express')
const router = express.Router()

const userRouter = require('./user')

router.get('/', (req,res)=> {
    res.json ({
        message: "welcome to my web"
    })
})

router.use('/user',userRouter)

module.exports = router