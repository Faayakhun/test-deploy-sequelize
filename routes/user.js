const express = require('express')
const {getAllUser, getUserByID } = require('../controller/user.controller')
const router = express.Router()

router.get('/', getAllUser)
router.get('/:id',getUserByID)

module.exports = router