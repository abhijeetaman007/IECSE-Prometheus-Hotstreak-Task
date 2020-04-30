// const express =require("express");
// const Router =express.Router();
// const mysqlConnection=require('../connection');

// //edit all question fields
// Router.put('/editquestion/:id/all',(req,res)=>{
//     var sql="UPDATE questions SET title='"+req.body.title+"',body='"+req.body.body+"',input_format='"+req.body.input_format+"',output_format='"+req.body.output_format+"',constraints='"+req.body.constraints+"',s_input='"+req.body.s_input+"',o_output='"+req.body.o_output+"',tc1='"+req.body.tc1+"',tc2='"+req.body.tc2+"',tc3='"+req.body.tc3+"',ans1='"+req.body.ans1+"',ans2='"+req.body.ans2+"',ans3='"+req.body.ans3+"',score='"+req.body.score+"' WHERE q_id="+parseInt(req.params.id)+""
//     mysqlConnection.query(sql,(err,rows,fields)=>{
//         if(err) throw err;
//         console.log("Updated Successfully");
//         res.send("Updated Successfully");
//     })
// })

// //edit question title
// Router.put('/editquestion/:id/title',(req,res)=>{
//     var sql="UPDATE questions SET title='"+req.body.title+"' WHERE q_id="+parseInt(req.params.id)+""
//     mysqlConnection.query(sql,(err,rows,fields)=>{
//         if(err) throw err;
//         console.log("Updated Successfully");
//         res.send("Updated Successfully");
//     })
// })

// //edit question body
// Router.put('/editquestion/:id/body',(req,res)=>{
//     var sql="UPDATE questions SET body='"+req.body.body+"' WHERE q_id="+parseInt(req.params.id)+""
//     mysqlConnection.query(sql,(err,rows,fields)=>{
//         if(err) throw err;
//         console.log("Updated Successfully");
//         res.send("Updated Successfully");
//     })
// })

// //edit question input_format
// Router.put('/editquestion/:id/input_format',(req,res)=>{
//     var sql="UPDATE questions SET input_format='"+req.body.input_format+"' WHERE q_id="+parseInt(req.params.id)+""
//     mysqlConnection.query(sql,(err,rows,fields)=>{
//         if(err) throw err;
//         console.log("Updated Successfully");
//         res.send("Updated Successfully");
//     })
// })
// //edit question output_format
// Router.put('/editquestion/:id/output_format',(req,res)=>{
//     var sql="UPDATE questions SET output_format='"+req.body.output_format+"' WHERE q_id="+parseInt(req.params.id)+""
//     mysqlConnection.query(sql,(err,rows,fields)=>{
//         if(err) throw err;
//         console.log("Updated Successfully");
//         res.send("Updated Successfully");
//     })
// })
// //edit question constraints
// Router.put('/editquestion/:id/constraints',(req,res)=>{
//     var sql="UPDATE questions SET constraints='"+req.body.constraints+"' WHERE q_id="+parseInt(req.params.id)+""
//     mysqlConnection.query(sql,(err,rows,fields)=>{
//         if(err) throw err;
//         console.log("Updated Successfully");
//         res.send("Updated Successfully");
//     })
// })

// //edit question s_input
// Router.put('/editquestion/:id/s_input',(req,res)=>{
//     var sql="UPDATE questions SET s_input='"+req.body.s_input+"' WHERE q_id="+parseInt(req.params.id)+""
//     mysqlConnection.query(sql,(err,rows,fields)=>{
//         if(err) throw err;
//         console.log("Updated Successfully");
//         res.send("Updated Successfully");
//     })
// })

// //edit question o_output
// Router.put('/editquestion/:id/o_output',(req,res)=>{
//     var sql="UPDATE questions SET o_output='"+req.body.o_output+"' WHERE q_id="+parseInt(req.params.id)+""
//     mysqlConnection.query(sql,(err,rows,fields)=>{
//         if(err) throw err;
//         console.log("Updated Successfully");
//         res.send("Updated Successfully");
//     })
// })

// //edit question tc1
// Router.put('/editquestion/:id/tc1',(req,res)=>{
//     var sql="UPDATE questions SET tc1='"+req.body.tc1+"' WHERE q_id="+parseInt(req.params.id)+""
//     mysqlConnection.query(sql,(err,rows,fields)=>{
//         if(err) throw err;
//         console.log("Updated Successfully");
//         res.send("Updated Successfully");
//     })
// })

// //edit question tc2
// Router.put('/editquestion/:id/tc2',(req,res)=>{
//     var sql="UPDATE questions SET tc2='"+req.body.tc2+"' WHERE q_id="+parseInt(req.params.id)+""
//     mysqlConnection.query(sql,(err,rows,fields)=>{
//         if(err) throw err;
//         console.log("Updated Successfully");
//         res.send("Updated Successfully");
//     })
// })

// //edit question tc3
// Router.put('/editquestion/:id/tc3',(req,res)=>{
//     var sql="UPDATE questions SET tc3='"+req.body.tc3+"' WHERE q_id="+parseInt(req.params.id)+""
//     mysqlConnection.query(sql,(err,rows,fields)=>{
//         if(err) throw err;
//         console.log("Updated Successfully");
//         res.send("Updated Successfully");
//     })
// })

// //edit question ans1
// Router.put('/editquestion/:id/ans1',(req,res)=>{
//     var sql="UPDATE questions SET ans1='"+req.body.ans1+"' WHERE q_id="+parseInt(req.params.id)+""
//     mysqlConnection.query(sql,(err,rows,fields)=>{
//         if(err) throw err;
//         console.log("Updated Successfully");
//         res.send("Updated Successfully");
//     })
// })

// //edit question ans2
// Router.put('/editquestion/:id/ans2',(req,res)=>{
//     var sql="UPDATE questions SET ans2='"+req.body.ans2+"' WHERE q_id="+parseInt(req.params.id)+""
//     mysqlConnection.query(sql,(err,rows,fields)=>{
//         if(err) throw err;
//         console.log("Updated Successfully");
//         res.send("Updated Successfully");
//     })
// })

// //edit question ans3
// Router.put('/editquestion/:id/ans3',(req,res)=>{
//     var sql="UPDATE questions SET ans3='"+req.body.ans3+"' WHERE q_id="+parseInt(req.params.id)+""
//     mysqlConnection.query(sql,(err,rows,fields)=>{
//         if(err) throw err;
//         console.log("Updated Successfully");
//         res.send("Updated Successfully");
//     })
// })

// //edit question score
// Router.put('/editquestion/:id/score',(req,res)=>{
//     var sql="UPDATE questions SET score="+req.body.score+" WHERE q_id="+parseInt(req.params.id)+""
//     mysqlConnection.query(sql,(err,rows,fields)=>{
//         if(err) throw err;
//         console.log("Updated Successfully");
//         res.send("Updated Successfully");
//     })
// })

// module.exports= Router;
