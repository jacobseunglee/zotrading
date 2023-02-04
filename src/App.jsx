import WebApp from "./components/WebApp"
import update from "./components/displayGraph"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  console.log('app')
  return (
    <div className="app">
      <WebApp />
    </div>
  )
}

export default App
