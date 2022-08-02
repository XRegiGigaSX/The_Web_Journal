import React, { useState } from "react";

function Clock() {
  
  var curTime = new Date().toLocaleTimeString();
  const [realTime, updateTime] = useState(curTime);
  
  function update() {
    var now = new Date().toLocaleTimeString();
    updateTime(now);
  }
  
  setInterval(update, 1000);
  
  return (
    <div>
      <h1 className="clock">{realTime}</h1>
    </div>
  );
}

function DateFormat(){
  var curDate = new Date().toLocaleDateString();
  const formatDate = (date) => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString().padStart(2, '0');
    let day = d.getDate().toString().padStart(2, '0');
    let year = d.getFullYear();
    return [year, month, day].join('-');
  }
   return (formatDate(curDate));
}

export default Clock;
export {DateFormat};