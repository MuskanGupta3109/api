const UserModel=require('../models/user')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


class UserController{

    // static userregister=async(req,res)=>{
    //     console.log(req.body)
    //     try{
    //         //console.log(req.body)
    //         const{name,email,password,cpassword}=req.body
    //         const user=await UserModel.findOne({email:email})//first email is schea wala h or second const k andar email wala hai
    //         //console.log(admin)
    //         if(user){
    //             res.status(401).json({
    //                 message:'email already exit',

    //             })
    //         }
    //         else{
    //             if(name && email && password && cpassword){
    //                 if(password==cpassword){
    //                     try{
    //                         const hashpassword=await bcrypt.hash(password,10)
    //                         const result=await UserModel({
    //                             name:name,
    //                             email:email,
    //                             password:hashpassword
    //                             })
    //                             await result.save();
    //                             res.status(201).json({
    //                                 message:'registration successfully',
    //                                 result
    //                         })
    //                     }
    //                     catch(err){
    //                         console.log(err);
    //                     }
    //                 }else{
    //                     res.status(401).json({
    //                         message:'password and confirm password do not match',
    //                 })
    //                 }
    //             }else{
    //                 res.status(401).json({
    //                     message:'all fields are required',
    //             })
    //         }
    //     //     const result=await AdminModel({
    //     //         name:name,
    //     //         email:email,
    //     //         password:password
    //     //     })
    //     //     await result.save();
    //     //     res.redirect("/login")
    //     }
    // }
    //     catch(err){
    //         console.log(err)
    //     }
    // //console.log(req.body)
    // };
    static userregister=async(req,res)=>{
        console.log(req.body)
        try{
            //console.log(req.body)
            const{role,email,password}=req.body
            console.log(req.body)
            const user=await UserModel.findOne({email:email})//first email is schea wala h or second const k andar email wala hai
            //console.log(admin)
           if(role && email && password){
            if(user){
                res.status(401).json({
                    message:'email already exit',

                })
            }
            else{
                if(role && email && password){
                    if(email&&password){
                        if(password){
                            try{
                                const hashpassword=await bcrypt.hash(password,10)
                                const result=await UserModel({
                                    role:role,
                                    email:email,
                                    password:hashpassword
                                    })
                                    await result.save();
                                    res.status(201).json({
                                        message:'registration successfully',
                                        result
                                })
                            }
                            catch(err){
                                console.log(err);
                            }
                        }else{
                            res.status(401).json({
                                message:'password and confirm password do not match',
                        })
                        }
                    }else{
                        res.status(401).json({
                            message:'email or password not provide',
                    })
                    }
                }else{
                    res.status(401).json({
                        message:'all fields are required',
                })
            }
        //     const result=await AdminModel({
        //         name:name,
        //         email:email,
        //         password:password
        //     })
        //     await result.save();
        //     res.redirect("/login")
        }
           }else{
            res.status(401).json({
                message:'email or password not provide',
        })
           }
    }
        catch(err){
            console.log(err)
        }
    //console.log(req.body)
    };

    // static verify_login=async(req,res)=>{
    //     try{
    //         console.log(req.body)
    //         const{email,password}=req.body
    //         if(email && password ){
    //             const user=await UserModel.findOne({email:email})
    //             console.log(user)
    //             if(user != null){
    //                 const ismatched=await bcrypt.compare(password,user.password)//phla password jo user enter krega or second waala jo database m pda h 
    //                 if(ismatched){
    //                     //token generate
    //                     const token = jwt.sign({id: user._id }, 'muskanshanu123');
    //                     //console.log(token)
    //                     res.cookie('token',token)
    //                     res.status(201)
    //                         .json({
    //                             status:"success",
    //                             message:"login sucess with web token",
    //                             "Token":token,
    //                             user
    //                         })
    //                 }
    //                 else{
                       
    //                     res.status(401).json({
    //                         message:"email or password not matched",
    //                     })
    //                 }
    //             }else{
                    
    //                 res.status(401).json({
    //                     message:"you are not registerd",
    //                 })
    //             }
    //         }
    //         else{
                
    //             res.status(401).json({
    //                 message:"all fields are required",
    //             })
    //         }
    //     }
    //     catch(err){
    //         res.send(err)
    //     }
    
    
    //     };
    // static verify_login=async(req,res,next)=>{
    //     try{
    //         console.log(req.body)
    //         const{email,password,role}=req.body
    //         if(email && password ){
    //             const user=await UserModel.findOne({email:email,role:role})
    //             console.log(user)
    //             if(user != null){
    //                 const ismatched=await bcrypt.compare(password,user.password)//phla password jo user enter krega or second waala jo database m pda h 
    //                 if(email&&role==1){
    //                     if(ismatched){
    //                     //token generate
    //                     const token = jwt.sign({id: user._id }, 'muskanshanu123');
    //                     //console.log(token)
    //                     res.cookie('token',token)
    //                     res.status(201)
    //                         .json({
    //                             status:"success",
    //                             message:"admin login sucess with web token",
    //                             "Token":token,
    //                             user
    //                         })
    //                 }
    //                 else{
                       
    //                     res.status(401).json({
    //                         message:"email or password not matched",
    //                     })
    //                 }
    //                }
    //                else{
    //                 res.status(401).json({
    //                     message:"email or role not matched",
    //                 })
    //                }
    //                if(email&&role==2){
    //                 if(ismatched){
    //                 //token generate
    //                 const token = jwt.sign({id: user._id }, 'muskanshanu123');
    //                 //console.log(token)
    //                 res.cookie('token',token)
    //                 res.status(201)
    //                     .json({
    //                         status:"success",
    //                         message:"supervisor login sucess with web token",
    //                         "Token":token,
    //                         user
    //                     })
    //             }
    //             else{
                   
    //                 res.status(401).json({
    //                     message:"email or password not matched",
    //                 })
    //             }
    //            }
    //            else{
    //             res.status(401).json({
    //                 message:"email or role not matched",
    //             })
    //            }
    //            if(email&&role==3){
    //                 if(ismatched){
    //             //token generate
    //             const token = jwt.sign({id: user._id }, 'muskanshanu123');
    //             //console.log(token)
    //             res.cookie('token',token)
    //             res.status(201)
    //                 .json({
    //                     status:"success",
    //                     message:"user login sucess with web token",
    //                     "Token":token,
    //                     user
    //                 })
    //         }
    //         else{
               
    //             res.status(401).json({
    //                 message:"email or password not matched",
    //             })
    //         }
    //        }
    //        else{
    //         res.status(401).json({
    //             message:"email or role not matched",
    //         })
    //        }
    //             }else{
                    
    //                 res.status(401).json({
    //                     message:"you are not registerd",
    //                 })
    //             }
    //         }
    //         else{
                
    //             res.status(401).json({
    //                 message:"all fields are required",
    //             })
    //         }
    //     }
    //     catch(err){
    //         res.send(err)
    //     }
    
    
    //     };
    static verify_login = async (req, res, next) => {
        try {
            console.log(req.body);
            const { email, password, role } = req.body;
            
            if (!email || !password || !role) {
                return res.status(401).json({
                    message: "All fields are required",
                });
            }
    
            const user = await UserModel.findOne({ email: email, role: role });
            console.log(user);
    
            if (user === null) {
                return res.status(401).json({
                    message: "You are not registered",
                });
            }
    
            const isMatched = await bcrypt.compare(password, user.password);
    
            if (!isMatched) {
                return res.status(401).json({
                    message: "Email or password not matched",
                });
            }
    
            // Token generation
            const token = jwt.sign({ id: user._id }, 'muskanshanu123');
            res.cookie('token', token);
    
            let loginMessage = "";
    
            if (role == 1) {
                loginMessage = "Admin login success with web token";
            } else if (role == 2) {
                loginMessage = "Supervisor login success with web token";
            } else if (role == 3) {
                loginMessage = "User login success with web token";
            }
    
            res.status(201).json({
                status: "success",
                message: loginMessage,
                Token: token,
                user,
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal server error",
            });
        }
    };
    

        // static logout=async(req,res)=>{
        //     try{
        //         res.clearCookie('token')
                
        //         // res.redirect('/login')
        //     }
        //     catch(err){
        //         console.log(err)
        //     }
        // }

      static logout=async(req,res)=>{
            try{
                res.clearCookie('token')
                // res.redirect('/login')
                res.status(201).json({
                    message:'logout successfully',
                })
                
            }
            catch(err){
                console.log(err)
            }
        }

        // Define a route to update user information (e.g., name or email)
// controllers/UserController.js



 static changePassword = async (req, res) => {
    try {
        const { email, currentPassword, newPassword } = req.body;

        if (!email || !currentPassword || !newPassword) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        const isMatched = await bcrypt.compare(currentPassword, user.password);

        if (!isMatched) {
            return res.status(401).json({
                message: "Current password is incorrect",
            });
        }

        // Hash the new password before saving it
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password in the database
        user.password = hashedNewPassword;
        await user.save();

        return res.status(200).json({
            message: "Password changed successfully",
        });
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}




// static createUserByContactNo = async (req, res) => {
//   const { contact_no, role } = req.body;
// console.log(req.body)
//   try {
//     // Check if the user with the given contact_no already exists
//     const existingUser = await UserModel.findOne({ contact_no:contact_no });
// console.log('existingUser',existingUser)
//     if (existingUser) {
//       return res.status(409).json({ message: 'User already exists' });
//     }

//     // Create a new user document
//   else{
//     const newUser = new UserModel({
//         contact_no:contact_no,
//         role:role
//       });
//       console.log('newuser',newUser)
//       // Save the new user to the database
//       await newUser.save();
//   }

//     if (role === 3) {
//       // Perform any specific actions for role 1 here   
//       // For example, create a related document in another collection
//     //   const newCandidate = new UserModel({ contact_no, user_id: newUser._id });
//     //   await newCandidate.save();
//     }

//     return res.status(201).json({ message: 'User created successfully', newUser });
//   }
//    catch (err) {
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };

static createUserByContactNo = async (req, res) => {
  const { contact_no, role } = req.body;

  try {
    // Check if the user with the given contact_no already exists
    const existingUser = await UserModel.findOne({ contact_no });

    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Create a new user document
    const newUser = new UserModel({
      contact_no,
      role,
    });

    // Save the new user to the database
    await newUser.save();

    if (role === 1) {
      // If needed, perform any specific actions for role 1 here
      // For example, create a related document in another collection
      // const newCandidate = new CandidateModel({ contact_no, user_id: newUser._id });
      // await newCandidate.save();
    }

    return res.status(201).json({ message: 'User created successfully', newUser });
  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).json({ message: 'Internal server error' });
  }
};


        static displayuser=async(req,res)=>{
            try{
                const data=await UserModel.find();
                res.status(200).json({
                    success:true,
                    data
                })
            }
            catch(err){
                console.log(err)
            }
        }




}

module.exports=UserController