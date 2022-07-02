const express = require ('express')
const router = express.Router()
router.get('/',(req,res,next) =>{
    console.log('in another middleware 1');
    res.send('jestem na /')
})
module.exports = router