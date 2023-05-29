import React from 'react'

import './key.css'

const Key = ({valor,textKey,setTextKey}) => {
  return (

    <>
      {
        valor!='='?
          <button style={{
            width:"24%",
          }} className="key" name={valor} onClick={
            (e)=>{{
              setTextKey(e.target.name);
            }}
          }
          >{valor}</button>
        
        :
          <button style={{
            width:"49%",
          }} className="key" name={valor} onClick={
            (e)=>{{
              setTextKey(e.target.name);
            }}
          }
          >{valor}</button>
      }
    </>
       
  )
}

export default Key