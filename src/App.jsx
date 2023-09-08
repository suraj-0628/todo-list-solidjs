import { createSignal } from "solid-js"


function App() {
 const [todo,settodo]=createSignal("enter your todo list")

  return (
    <div class="te">
      <h1>TODO</h1>
      <input type="text" onInput={todo}/>
    </div>
  )
}

export default App
