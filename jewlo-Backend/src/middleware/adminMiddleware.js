const adminOnly = (req,res,next)=>{
  if (req.user && req.user.roll==="admin"){
    next();
  }else{
    res.status(403);
    throw new Error("admin access only");
  }
};

module.exports={adminOnly}