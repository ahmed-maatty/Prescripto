import User from "../../DB/User.js"

export default async function getAllUsers(req,res){
  try {
    const Users = await User.find().populate("appointments")
    res.status(200).json({Users})
  } catch (err) {
    console.log(err)
    res.status(500).json({message : "Internal Server Error!"})
  }
}