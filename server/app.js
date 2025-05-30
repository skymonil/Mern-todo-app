const express = require('express');
const app = express();
app.use(express.json())

const auth = require('./routes/auth')
const list = require('./routes/list')


require('./DB')

app.use('/api/v1',auth)
app.use('/api/v2',list)
app.listen(1000,()=>{
    console.log("Server started")
})