// const mongoose=require('mongoose')

// const connectdb = ()=>{
//     return mongoose.connect(process.env.DB_URL,{
       
//     }).then((data)=>{
//         console.log(`Mongodb connected with server:${data.connection.host}`);
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

// module.exports  =  connectdb
const mongoose = require('mongoose')

const uri="mongodb+srv://muskangupta9224:muskangupta3109@cluster0.lix65ln.mongodb.net/blogapi?retryWrites=true&w=majority";

// const uri="mongodb+srv://muskangupta3109:Muskan123@cluster0.x00tttt.mongodb.net/Blogwebsite?retryWrites=true&w=majority"
const connectDB=()=>{
    //return mongoose.connect('mongodb://localhost:27017/Blogwebsite')
    return mongoose.connect(uri)

    .then(()=>{
        console.log('Connection succesfull')
    })
    .catch((err)=>{
        console.log(err)
    })
}
mongoose.set('strictQuery',false);
module.exports=connectDB