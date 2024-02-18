import { Route, Routes } from "react-router-dom"
import Landing from "./views/Landing"
import Home from "./views/Home"
import Intro from "./views/Intro"

function App() {
  return (
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/intro" element={<Intro/>}/>
        <Route path="/home" element={<Home/>}/>

    </Routes>
  )
}

export default App
