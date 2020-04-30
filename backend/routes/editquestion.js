const express =require("express");
const Router =express.Router();
const mysqlConnection=require('../connection');

Router.put('/editquestion/:id',(req,res)=>{
    var sql="UPDATE questions SET title='"+req.body.title+"',body='"+req.body.body+"' WHERE q_id="+parseInt(req.params.id)+""
    mysqlConnection.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        console.log("Updated Successfully");
        res.send("Updated Successfully");
    }) 
})
module.exports= Router;