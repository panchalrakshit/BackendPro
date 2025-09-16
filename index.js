require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Home',(req,res)=>{
    res.send("Welcome to Home page!")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})