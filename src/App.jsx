
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import AboutCompany from "./AboutCompany";
import AboutProduct from "./AboutProduct";
const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}>
          <Route path="aboutcompany" element={<AboutCompany/>}/>
          <Route path="aboutproduct" element={<AboutProduct/>}/>
        </Route>
        <Route path="contact" element={<Contact/>}/>

        </Route>

        </Routes>
        
        </BrowserRouter>
       
       </>
    )
}
export default App;
