exports.signup = (res, req)=>{
  const {name, email, password} = req.body;
  res.json({
    user:{name,email, password}
  })
}
