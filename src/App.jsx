import { createSignal } from "solid-js"
import banner from "./assets/Breaking-Bad.jpg"

import { Routes, Route } from "@solidjs/router";
import Home from "./components/pages/home";
import Cart from "./components/pages/cart";

function App() {
  const [darkTheme,setdarkTheme]=createSignal(false)
  function toggleTheme(){
    setdarkTheme((prev)=>!prev)
  }
  return (
    <div class="m-auto container"
    classList={{" bg-neutral-900 ":darkTheme() , " text-white ":darkTheme()}} 
    >
     <header class="my-4 p-2 text-xl flex items-centermgap-4"
    >
    
     
      <span class="material-symbols-outlined cursor-pointer"
      onClick={()=>toggleTheme()}>
          light_mode 
      </span>
      <h1>Breaking Bad Merch</h1>
      
      </header>

      

      <img src={banner} alt="" />

      <Routes>
        <Route path="/"component={Home} />
        <Route path="/cart" component={() => <Cart darkTheme={darkTheme} toggleTheme={toggleTheme} />} />
      </Routes>
      
     
      
    </div>
  )
}

export default App
