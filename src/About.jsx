import {Link,Outlet} from "react-router-dom";
const About=()=>{
    return(
        <>
        <h1>About page</h1>
        <table border="1">
            <tr>
                <Link to="aboutcompany">AboutComany</Link>
                <Link to="aboutproduct">AboutProduct</Link>
            </tr>
            <tr>
                <Outlet/>
            </tr>
        </table>
        </>
    )
}
export default About;