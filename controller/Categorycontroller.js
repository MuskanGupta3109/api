const CategoryModel=require('../models/category')

class CategoryController{
    static create=async(req,res)=>{
        //console.log(req.body)
        //res.send('hello')
        try{

            const {catname,catdescription}=req.body
            const result= new CategoryModel({
                catname:catname,
                catdescription:catdescription
                

            })
            await result.save();
            res.status(201).json({
                success:true,
                result
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static display=async(req,res)=>{
        try{
            const data=await CategoryModel.find();
            res.status(200).json({
                success:true,
                data
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static view=async(req,res)=>{
        try{
            const data=await CategoryModel.findById(req.params.id);
            res.status(200).json({
                success:true,
                data
            })
        }
        catch(err){
            console.log(err)
        }
    }

    static update=async(req,res)=>{
        try{
            const{catname,catdescription}=req.body
            const data=await CategoryModel.findByIdAndUpdate(req.params.id,{
                catname:catname,
                catdescription:catdescription,
               


            });
            

            res.status(200).json({
                success:true,
                message:"update sucessfully"
            })
        }
        catch(err){
            console.log(err)
        }
    }
    static delete=async(req,res)=>{
        try{
           
            const data=await CategoryModel.findByIdAndDelete(req.params.id,{
                
               


            });
            

            res.status(200).json({
                success:true,
                message:"delete successfully"
                
            })
        }
        catch(err){
            console.log(err)
        }
    }


}

module.exports=CategoryController