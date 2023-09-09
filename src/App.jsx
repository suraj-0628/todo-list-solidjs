import banner from "./assets/Breaking-Bad.jpg"
import { Card } from "./components/card"

function App() {
  return (
    <div class="">
     <header><h1>Breaking Bad Merch</h1></header>
      <img src={banner} alt="" />

      <div class="grid grid-cols-4 my-10 ">
      <Card><h2>breaking bad shirt ,white</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor unde rem eius, architecto alias nesciunt!</p>
            <button class="btn">click me!</button></Card>
      <Card><h1>breaking bad shirt ,black</h1>
      <button class="btn">click me!</button>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor unde rem eius, architecto alias nesciunt!</p>
            <p>100Rs</p>
            </Card>
          
      {/* <Card title="Breaking Bad Hoodie"/> */}
      </div>
      
      
      
    </div>
  )
}

export default App
