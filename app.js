const express = require('express')
const app = express()
const dotenv=require('dotenv')
const connectdb=require('./db/connect_db')
const web=require('./routes/web')
const cors=require('cors')
const fileUpload = require("express-fileupload");
app.use(fileUpload({useTempFiles: true}));

app.use(cors())




app.use(express.json())         //this is usedfor send and receiveing  data

//app.use(cors())


dotenv.config({
    path:'.env'
})

connectdb()
app.use('/api',web)







app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})