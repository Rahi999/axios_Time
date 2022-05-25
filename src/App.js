import React from "react"
import Todo from "./components/Todos"
import "./styles.css";
import Timer from "./components/Timer";
import StopWatch from "./components/StopWatch";
import Time from "./components/Time"
export default function App(){

return (
  <div className="App">
    <h1> Time is Running </h1>
    {/* <Timer /> */}
    {/* <StopWatch /> */}
   <Time />
  </div>
)

}