import React,{ useState, useEffect } from "react";

export default function Timer(){

  const [timer, setTimer] = useState(10000);

  useEffect(()=> {
    let id=setInterval(()=> {
      setTimer((prev)=> prev-1)
    },1000) ;
    return()=> {
      clearInterval(id)
    }
  },[]);
  return <div>
    count Down : {timer}</div>
};