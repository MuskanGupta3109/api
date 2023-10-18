const mongoose=require('mongoose')

//define schema
const CategorySchema=new mongoose.Schema({
    catname:{
        type:String,
        required:true
    },
    catdescription:{
        type:String,
        required:true
    
    },
    // image:{
    //     public_id:{
    //         type:String,
    //         required:true
    //     }
        
    // }
    // image:{
    //     public_id:{
    //         type:String,
    //     },
    //     url:{
    //         type:String,
    //     },
    // },
},{timestamps:true})

//create collection
const CategoryModel=mongoose.model('Category',CategorySchema)
//                                  ^collection name
module.exports=CategoryModel