import React, { useEffect } from 'react'
import KeyFrame from '../keyFrame/KeyFrame'
import ScreenFrame from '../screenFrame/ScreenFrame'
import { useState } from 'react';


const Frame = () => {
  const [textScreen,setTextScreen] = useState("");
  const [textKey,setTextKey] = useState("");

  useEffect(()=>{
    if(textKey.charAt(textKey.length-1)=="C"){
      setTextScreen("");
    }
    else if(textKey.charAt(textKey.length-1)=="="){ 
      const result = eval(textScreen.replace('x','*'));
      if(Number.isInteger(parseFloat(result))){
        setTextScreen(result);
      }
      else{
        setTextScreen(parseFloat(result).toFixed(5).toString());
      }
      
    }
    else if(textKey.charAt(textKey.length-1)=="+-"){

    }
    else{
      setTextScreen(textScreen+textKey);
    }


  },[textKey])

  return (
    <div style={{
        width:"30%",
        height:"90%",
        backgroundColor:"#205295",
        borderRadius: "20px",
        // transform: "scale(1.1)",
        boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)", 
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        padding:"20px",
        gap:"20px",
    }}>
      <ScreenFrame textScreen={textScreen}></ScreenFrame>
      <KeyFrame textKey={textKey} setTextKey={setTextKey}></KeyFrame>
    </div>
  )
}

export default Frame