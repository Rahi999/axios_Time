import React, {useState} from 'react';

export default function Time() {
  const [watch, setWatch] = useState(0)
  const [timerId,setTimerId] = useState(0);  
   const [end, setEnd] = useState(20)
      if(!timerId){
        let id = setInterval(()=> {
          setWatch((prev)=> prev+1)
        },500)
        if(timerId==10)
        {
          clearInterval(id)
          setWatch(0)
        }
        setTimerId(id)
      
      }
    

  return (

    <div>
      <h2>StopWatch</h2>
      <h1>{watch}</h1>

  


    </div>
  )
}