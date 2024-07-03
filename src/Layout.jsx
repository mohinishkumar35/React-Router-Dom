// import { Link, Outlet } from "react-router-dom";



// const Layout=()=>{
//     return(
//         <>
//         <Link to="home">Home</Link>
//         <Link to="about">About us</Link>
//         <Link to="contact">Contact us</Link>
//         <hr size='3' color="red"/>

//         <Outlet/>

//         <hr size='3' color="red"/>

//         www.mycompany.com 2024



//         </>
//     )
// }
// export default Layout;

//------------------------------------------------------------------------

import { Link, Outlet } from "react-router-dom";



const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link>
        <Link to="about">About us</Link>
        <Link to="service">Our Service</Link>
        <Link to="contact">Contact us</Link>
        <hr size='3' color="red"/>
        <Outlet/>
        <hr size='3' color="red"/>

        www.mycompany.com all right reserved. 2024



        </>
    )
}
export default Layout;