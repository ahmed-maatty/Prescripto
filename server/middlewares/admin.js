export default async function adminCheck(req,res,next){
  try {
    const {role} = req.user;
    if(role === "Admin"){
      return next();
    };
    return res.status(401).json({message : "Only Admin Can Do This."})
  } catch (err) {
    console.log(err)
    res.status(500).json({message : "Internal Serve Error"})
  }
}