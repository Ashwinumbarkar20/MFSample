import React from 'react'

export default function Button({label,onClick}) {
  return (
    <>
      <button style={{width:"100px",height:"30px",padding:"2px 4px",textAlign:"center",background:"red",color:"white",fontWeight:"bold"}} onClick={onClick}>{label}</button>
    </>
  )
}
