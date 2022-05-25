import React, { useEffect, useState} from "react";
import axios from "axios";
//import Todo from "./components/Todo";


export default function Todo() {
const [todos, setTodos] = useState([]);
const [page, setPage] = useState(1);
const [totalCount, setTotalCount] = useState(0);
const [limit,setLimit] = useState(3)

useEffect(()=> {
  const getTodo = async ()=> {
    let res = await axios.get(`https://17ff65.sse.codesandbox.io/todos?_page=${page}&_limit=${limit}`);
    console.log(res.data)
    setTodos(res.data)
    setTotalCount(Number(res.headers["x-total-count"]))
  }
  getTodo()
},[page, limit])


  return (
    <div className="Todo">

<button disabled={page<=1} onClick={()=> {
       if(page > 1)
       {
         setPage(page-1)
       }
     }}>{`<`}</button>
   
      <select onChange={(e)=> setLimit(Number(e.target.value))} >
        <option value={3}  >3</option>
        <option value={4}  >4</option>
        <option value={5}  >5</option>
        <option value={10} >10</option>
        <option value={15} >15</option>
      </select>
     <button
     disabled={totalCount < page*5}
     onClick={()=> setPage(page+1)} >{`>`}</button>


      {todos.map((todo)=> (
        <div id={todo.id}>{todo.text}</div>
      ))}
     
       
    </div>
  );
}
