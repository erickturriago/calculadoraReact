import React from 'react'

import { useEffect } from 'react'

const Screen = ({textScreen}) => {

  useEffect(()=>{

  },[textScreen])

  return (
    <div style={{
      color:"white",
      fontSize:"70px"
    }}>{textScreen}</div>
  )
}

export default Screen