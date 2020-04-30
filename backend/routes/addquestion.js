const express =require("express");
const Router =express.Router();
const mysqlConnection= require("../connection");

Router.post('/',(req,res)=>{
    var sql="INSERT INTO questions(q_id,title,body,input_format,output_format,constraints,s_input,o_output,tc1,tc2,tc3,ans1,ans2,ans3,score) VALUES("+req.body.q_id+",'"+req.body.title+"','"+req.body.body+"','"+req.body.input_format+"','"+req.body.output_format+"','"+req.body.constraints+"','"+req.body.s_input+"','"+req.body.o_output+"','"+req.body.tc1+"','"+req.body.tc2+"','"+req.body.tc3+"','"+req.body.ans1+"','"+req.body.ans2+"','"+req.body.ans3+"',"+req.body.score+")"
     mysqlConnection.query(sql,(err,rows,fields)=>{
         if(err) throw err
         console.log("Saved Sucessfully")
         res.send("Saved Successfully");
    })
})
module.exports= Router;
