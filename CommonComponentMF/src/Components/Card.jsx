

import Button from './Button'

export default function Card({data}) {
  return (

<div style={{height:"300px",width:"200px",background:"grey",color:"white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"2",padding:"5px"}}>
      <p>{data?.title || "Title"}</p>
      <p>{data?.decription ||"Description of project"}</p>
      <p>{data?.price || "$100"}</p>

      <Button label={"Add to Cart"}/>

    </div>
  )
}
