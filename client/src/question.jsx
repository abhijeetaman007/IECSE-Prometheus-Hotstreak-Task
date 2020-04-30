// eslint-disable-next-line
import React from "react";
import questions from "./questiondetails";


function Card(props){
return <div className="box" onClick={()=>{
    ///when clicked item properties displayed
    console.log(props);
}}>
<h2>
     {props.title}
</h2>
<h4>
    {props.score}
</h4>

</div>
};



function Questiondesc(){
    return <div>
    {questions.map((question)=><Card  key={question.q_id} q_id={question.q_id} title={question.title} body={question.body} input_format={question.input_format} output_format={question.output_format} constraints={question.constraints} s_input={question.s_input} o_output={question.o_output} tc1={question.tc1} tc2={question.tc2} tc3={question.tc3} ans1={question.ans1} ans2={question.ans2} ans3={question.ans3} score={question.score}/>)}
    </div>

 
    
}
export default  Questiondesc;