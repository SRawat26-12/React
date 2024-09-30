import { Outlet,Link } from "react-router-dom";

const Layout=()=>{
    return(
        <>
      <Link to="home">Home</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
      <hr size="6" color="red"/>
      <Outlet/>
      <hr size="6" color="red"/>
      <h1>this is footer part</h1>
        
        </>
    )
}
export default Layout;