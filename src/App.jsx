
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './Components/Footer'
import Header from './Components/Header'
import LandingPage from './Components/LandingPage'
import Login from './Components/Login'
import { useState } from 'react'
import Pricing from './Components/Pricing'
import About from './Components/About'
import Features from './Components/Features'
import PostListProvider from './Store/App-Store'

function App() {
  const [action, Setaction] = useState("Home");
  return (
    <PostListProvider>
      <Header action={action} Setaction={Setaction}></Header>
      {action==="Home" && <LandingPage></LandingPage> }
      {action==="Pricing" && <Pricing></Pricing>}
      {action==="Login" && <Login></Login>}
      {action==="About" && <About></About>}
      {action==="Features" && <Features></Features>}
      {!action==="Login" && <Footer></Footer>}
      
      </PostListProvider>
    

    
  )
}

export default App  
