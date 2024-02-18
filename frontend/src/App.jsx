import { Route, Routes } from "react-router-dom"

import Landing from "./views/Landing"
import Intro from "./views/Intro"
import Homecomprador from "./views/Homecomprador"
import { Homevendedor } from "./views/Homevendedor"

function App() {
  return (
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/intro" element={<Intro/>}/>
        <Route path="/homecomprador" element={<Homecomprador/>}/>
        <Route path="/homevendedor" element={<Homevendedor/>}/>

    </Routes>
  )
}

export default App
