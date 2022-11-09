 
 
import { useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";

const initailState = [
  {
    id:1,
    count:0
  },
  {
    id:2,
    count:0
  }
]

function App() {
  const [state, setState] = useState(initailState);
  

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
};
   
  const increment = (id)=>{
    const updatedCount = state.map(c=> {
      if(c.id === id){
        return {
          ...c,
          count:c.count +1
        }
      }else{
        return {...c}
      }
    } 
    )
    setState(updatedCount)
  }
  const decrement = (id)=>{

    const updatedCount = state.map(c=> {
      if(c.id === id){
        return {
          ...c,
          count:c.count -1
        }
      }else{
        return {...c}
      }
    } 
    )
    setState(updatedCount)
    
  }
  return (
    <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      <div class="max-w-md mx-auto mt-10 space-y-5">
       {
        state.map(counter=>  <Counter key={counter.id} count={counter.count} id={counter.id} increment={increment} decrement={decrement} />)
       }
         
        <Stats count={totalCount()} />
      </div>
    </div>
  );
}

export default App;
