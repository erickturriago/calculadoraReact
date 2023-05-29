import React from 'react'
import Screen from '../../common/screen/Screen'



const ScreenFrame = ({textScreen}) => {
  return (
    <div style={{
        width:"100%",
        maxHeight:"20%",
        minHeight:"20%",
        background: "rgba(2,0,36,1)",
        // background: "linear-gradient(171deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 29%, rgba(0,212,255,1) 100%)",
        borderRadius:"20px",
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-end",
        padding:"20px"
    }}>
    <Screen textScreen={textScreen}></Screen>
    </div>
  )
}

export default ScreenFrame