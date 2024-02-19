import { Route, Routes } from "react-router-dom"

import Layout from "@views/Layouts/Layout"
import Landing from "@views/Landing"
import Intro from "@views/Intro"
import Homecomprador from "@views/Homecomprador"
import { Homevendedor } from "@views/Homevendedor"

function App() {
  // Forzar viewport mobile en Layout, temporalmente mientras se desarrolla solo mobile
  // Usando dimensiones del iPhone 12 Pro (390 x 844 px)
  const forceMobileStyles = "mx-auto max-w-[390px] max-h-[844px] overflow-hidden h-screen";

  return (
    <Layout className={forceMobileStyles}>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/intro" element={<Intro/>}/>
        <Route path="/homecomprador" element={<Homecomprador/>}/>
        <Route path="/homevendedor" element={<Homevendedor/>}/>
      </Routes>
    </Layout>
  )
}

export default App
