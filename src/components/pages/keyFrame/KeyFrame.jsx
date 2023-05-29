import React, { useEffect, useState } from 'react'
import Key from '../../common/key/Key';


const botones = ["C", "+-", "%", "/",7, 8, 9, "x",4, 5, 6, "-",1, 2, 3, "+",0, ".", "="];

const KeyFrame = ({textKey,setTextKey}) => {

  return (
    <div
    style={{
      width:"100%",
      height:"80%",
      // backgroundColor:"black",
      borderRadius:"20px",
      display:"flex",
      flexWrap:"wrap",
      alignItems:"space-between",
      justifyContent:"space-between"
  }}>
    {
      botones.map( (valor)=>{
        return <Key textKey={textKey} setTextKey={setTextKey} valor={valor}/>
      })
    }
    </div>
  )
}

export default KeyFrame