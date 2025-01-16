import Headers from "./Head.jsx"
import './App.css'
import {AboutUs} from "./AboutUs.jsx";
import {Menu} from "./Menu.jsx";
import {Our} from "./Our.jsx";
import {Footerr} from "./Footerr.jsx";

function App() {


  return (
    <>
      <Headers/>
        <AboutUs/>
        <Menu/>
        <Our/>
        <Footerr/>
    </>
  )
}

export default App
