
import { lazy, Suspense } from 'react'
import './App.css'
const Button=lazy(()=>import("./Components/Button.jsx"))
const Card=lazy(()=>import("./Components/Card.jsx"))


function App() {
  

  return (
    <>
    <Suspense fallback={<p>Loading...!</p>}>
    <h1>Welcome to Common component MF</h1>
    <h2>below are the components available here </h2>
    <div style={{display:'flex',justifyContent:"center",gap:"5px",alignItems:"center"}}>
<Button label={"Welcome"}/>
<Card data={null}/>

    </div>
    </Suspense>
    </>
  )
}

export default App
