import { Route, Routes } from "react-router-dom"

import Layout from "@views/Layouts/Layout"
import Landing from "@views/Landing"
import Intro from "@views/Intro"

import CompradorHome from "@views/comprador/CompradorHome"
import CompradorSearch from "@views/comprador/CompradorSearch"
import CompradorHistory from "@views/comprador/CompradorHistory"
import CompradorProfile from "@views/comprador/CompradorProfile"

import VendedorHome from "@views/vendedor/VendedorHome"
import VendedorSearch from "@views/vendedor/VendedorSearch"
import VendedorHistory from "@views/vendedor/VendedorHistory"
import VendedorProfile from "@views/vendedor/VendedorProfile"

function App() {
  // Forzar viewport mobile en Layout, temporalmente mientras se desarrolla solo mobile
  // Usando dimensiones del iPhone 12 Pro (390 x 844 px)
  const forceMobileStyles = "mx-auto max-w-[390px] max-h-[844px]";

  return (
    <Layout className={forceMobileStyles}>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/intro" element={<Intro/>}/>
        
        <Route path="/comprador/home" element={<CompradorHome />}/>
        <Route path="/comprador/search" element={<CompradorSearch />}/>
        <Route path="/comprador/history" element={<CompradorHistory />}/>
        <Route path="/comprador/profile" element={<CompradorProfile />}/>
        
        <Route path="/vendedor/home" element={<VendedorHome />}/>
        <Route path="/vendedor/search" element={<VendedorSearch />}/>
        <Route path="/vendedor/history" element={<VendedorHistory />}/>
        <Route path="/vendedor/profile" element={<VendedorProfile />}/>
      </Routes>
    </Layout>
  )
}

export default App
