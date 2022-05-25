import React, {useState} from 'react';

export default function Stopwatch() {
  const [watch, setWatch] = useState(0)
  const [timerId,setTimerId] = useState(0);  
   const start = ()=> {
      if(!timerId){
        let id = setInterval(()=> {
          setWatch((prev)=> prev+1)
        },500)
        setTimerId(id)
      }

   }
   const reset=()=> {
    // clearInterval(timerId);
     setWatch(0)
    
   }

   const pause = ()=> {
      clearTimeout(timerId)
      setTimerId(null)
   }

  return (

    <div>
      <h2>StopWatch</h2>
      <h1>{watch}</h1>

  <button onClick={start}>start</button>
  <button onClick={pause}>Pause</button>
  <button onClick={reset}>Reset</button>


    </div>
  )
}