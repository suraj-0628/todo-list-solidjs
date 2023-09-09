import banner from "./assets/Breaking-Bad.jpg"
import { Card } from "./components/card"

function App() {
  return (
    <div class="">
     <header><h1>Breaking Bad Merch</h1></header>
      <img src={banner} alt="" />

      <div class="grid grid-cols-4 my-10 ">
      <Card title="Breaking Bad Tee"/>
      <Card title="Breaking Bad Shirt"/>
      <Card title="Breaking Bad Hoodie"/>
      </div>
      
      
      
    </div>
  )
}

export default App
