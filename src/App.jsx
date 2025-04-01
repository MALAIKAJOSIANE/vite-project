import { useState } from "react";

const App= () =>{
  const todo=["praying","making aday plan"];
  const[oldTodo,setOldTodo]=useState(todo)//state to hold current todos
  const [newTod,setNewTod]=useState(null);////holds the new todo
   //state variable to track changes in new todo input
   const [erro,setErro]=useState(false);

//function to add anew todo
function newTodo(){
   //condition checks if the created list is not empt
  if(!newTod){
    setErro(true) 
console.log("fill list pleas");
return
    }
      //spread items list
      setOldTodo([...oldTodo,newTod])//rsag
     
      setNewTod(""); 
    
    

      }//end
      function deleteTodoList(listItem){
        const upd=oldTodo.filter((data)=> data !=listItem);
        setOldTodo(upd);
      }
      const input=(e)=>{
        setErro(false);
        setNewTod(e.target.value);
      }
return(
<div class="container">
  <div className="form">
{erro && <div className="iferro">list your todos please becouse they are required</div>}
<input type="text" placeholder="ENTER NEW TODO" className="input" onChange={(e)=>input(e) } />
<button className="newfbtn" onClick={()=>{newTodo()}}>ADD NEW TODO</button>
</div>
<div className="table">
  <table className="table">
    <thead>
    <tr className="tableRow">
      <th>N<sup>o</sup></th>
       <th>TODO list</th>
        <th>action</th>
    </tr>
    </thead>
    <tbody>
       {oldTodo.map((item,id)=>(
         <tr><td>{id+1}</td>
         <td>{item}</td>
         <td><button onClick={()=>{deleteTodoList(item)}} className="delbtn">delete</button></td>
         </tr>      
       ))}
         
    </tbody>
  </table>
</div>

</div>
  )
}
export default App;