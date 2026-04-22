import { lazy, Suspense } from 'react';
import './App.css';
const Card = lazy(() => import('common/Card'));
const Button = lazy(() => import('common/Button'));
function App() {
  const data={
    title:"This is a title",
    description:"This is a description of the data",
    price:"$100",
  }
  return (
   <>
    Hello This is Host

    <div style={{display:"flex",justifyContent:"center",gap:"5px",alignItems:"center"}}>
      <Suspense fallback={<p>Loading...!</p>}>
        <Card data={data}/>
        <Button label={"Add to Cart"}/>
      </Suspense>
    
   </div>
   </>
  );
}

export default App;
