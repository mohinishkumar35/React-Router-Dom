//   //navbar + carousels
//  import Container from 'react-bootstrap/Container';
//  import Nav from 'react-bootstrap/Nav';
//  import Navbar from 'react-bootstrap/Navbar';
//  import NavDropdown from 'react-bootstrap/NavDropdown';

// import { useState } from "react";

//  // carousels
//  import Carousel from 'react-bootstrap/Carousel';

//  // card
//  import Button from 'react-bootstrap/Button';
//  import Card from 'react-bootstrap/Card';

//  // Row and col
//  import Row from 'react-bootstrap/Row';
//  import Col from 'react-bootstrap/Col';

//  const App=()=>{
//    return(
//      <>
//       <Navbar expand="lg" className="bg-body-tertiary">
//        <Container>
//          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//          <Navbar.Toggle aria-controls="basic-navbar-nav" />
//          <Navbar.Collapse id="basic-navbar-nav">
//            <Nav className="me-auto">
//              <Nav.Link href="#home">Home</Nav.Link>
//              <Nav.Link href="#link">Link</Nav.Link>
//              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                <NavDropdown.Item href="#action/3.2">
//                  Another action
//                </NavDropdown.Item>
//                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                <NavDropdown.Divider />
//                <NavDropdown.Item href="#action/3.4">
//                  Separated link
//                </NavDropdown.Item>
//              </NavDropdown>
//            </Nav>
//          </Navbar.Collapse>
//        </Container>
//      </Navbar>
  

//  <Carousel>
//  <Carousel.Item>
//    <img src="public/r1.jpg" width="100%" height="500" />
//    <Carousel.Caption>
//      <h3>First slide label</h3>
//      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//    </Carousel.Caption>
//  </Carousel.Item>
//  <Carousel.Item>
//    <img src="public/r2.jpg" width="100%" height="500" /> 
//    <Carousel.Caption>
//      <h3>Second slide label</h3>
//      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//    </Carousel.Caption>
//  </Carousel.Item>
//  <Carousel.Item>
//     <img src="public/r3.jpg" width="100%" height="500" /> 
//    <Carousel.Caption>
//      <h3>Third slide label</h3>
//      <p>
//        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//      </p>
//    </Carousel.Caption>
//  </Carousel.Item>
//  </Carousel>
//     <br/>

//    <br/>
//     <Container>
//       <Row>
//        <Col>
   
//    <Card style={{ width: '12rem' }}>
//        <img src="public/r1.jpg" />
//        <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </Card.Text>
//          <Button variant="primary">Go somewhere</Button>
//        </Card.Body>
//      </Card>
//      </Col>

//      <Col>
//      <Card style={{ width: '12rem' }}>
//        <img src="public/r2.jpg" />
//        <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </Card.Text>
//          <Button variant="primary">Go somewhere</Button>
//        </Card.Body>
//      </Card>
//          </Col>

//          <Col>
//      <Card style={{ width: '12rem' }}>
//        <img src="public/r3.jpg" />
//        <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </Card.Text>
//          <Button variant="primary">Go somewhere</Button>
//        </Card.Body>
//      </Card>
//      </Col>

//      <Col>
//      <Card style={{ width: '12rem' }}>
//        <img src="public/r4.jpg" />
//        <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </Card.Text>
//          <Button variant="primary">Go somewhere</Button>
//        </Card.Body>
//      </Card>
//      </Col>

//      <Col>
//      <Card style={{ width: '12rem'}}>
//        <img src="public/r8.jpg" />
//        <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </Card.Text>
//          <Button variant="primary">Go somewhere</Button>
//        </Card.Body>
//      </Card>
//      </Col>
   

//      <Col>
//      <Card style={{ width: '12rem'}}>
//        <img src="public/r5.jpg"  height={130}/>
//        <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </Card.Text>
//          <Button variant="primary">Go somewhere</Button>
//        </Card.Body>
//      </Card>
//      </Col>

//      </Row>
//      </Container>

//  </>
//    )
//  }
//  export default App;




//  import myimg1 from "./images/r1.jpg";
//  import myimg2 from "./images/r2.jpg";
//  import myimg3 from "./images/r3.jpg";


//  import Container from 'react-bootstrap/Container';
//  import Nav from 'react-bootstrap/Nav';
//  import Navbar from 'react-bootstrap/Navbar';
//  import NavDropdown from 'react-bootstrap/NavDropdown';
//  import Carousel from 'react-bootstrap/Carousel';
//  import Button from 'react-bootstrap/Button';
//  import Card from 'react-bootstrap/Card';

//   import Container from 'react-bootstrap/Container';
//  import Row from 'react-bootstrap/Row';
//  import Col from 'react-bootstrap/Col';
//  const App=()=>{
//      return(
//          <>
//          {/* <img src={myimg1} width="300" />
//          <img src={myimg2} width="250" />
//          <img src={myimg3} width="250" />
//          <br />
//          <img src="public/r1.jpg" width="300" />
//          <img src="public/r2.jpg" width="300" />
//          <img src="public/r3.jpg" width="300" /> */}
//          <Navbar expand="lg" className="bg-body-tertiary">
//        <Container>
//          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//          <Navbar.Toggle aria-controls="basic-navbar-nav" />
//          <Navbar.Collapse id="basic-navbar-nav">
//            <Nav className="me-auto">
//              <Nav.Link href="#home">Home</Nav.Link>
//              <Nav.Link href="#link">Link</Nav.Link>
//              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                <NavDropdown.Item href="#action/3.2">
//                  Another action
//                </NavDropdown.Item>
//                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                <NavDropdown.Divider />
//                <NavDropdown.Item href="#action/3.4">
//                  Separated link
//                </NavDropdown.Item>
//              </NavDropdown>
//            </Nav>
//          </Navbar.Collapse>
//        </Container>
//      </Navbar>

//  <Carousel>
//        <Carousel.Item>
//        <img src="public/r1.jpg" width="100%" height="600"/>
//          <Carousel.Caption>
//            <h3>First slide label</h3>
//            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//          </Carousel.Caption>
//        </Carousel.Item>
//        <Carousel.Item>
//        <img src="public/r2.jpg" width="100%" height="600" />
//        <Carousel.Caption>
//            <h3>Second slide label</h3>
//            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//          </Carousel.Caption>
//        </Carousel.Item>
//        <Carousel.Item>
//          <img src="public/r3.jpg" width="100%" height="600"/>
//          <Carousel.Caption>
//            <h3>Third slide label</h3>
//            <p>
//              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//            </p>
//          </Carousel.Caption>
//        </Carousel.Item>
//      </Carousel>
//  <br />
//  <br />


//      <Container>
//        <Row>
//          <Col>
//          <Card style={{ width: '18rem' }}>
//  <img src="public/r1.jpg" width="100%" height="300"/>
//  <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </Card.Text>
//          <Button variant="primary">Go somewhere</Button>
//        </Card.Body>
//      </Card>
//          </Col>

//          <Col>
//          <Card style={{ width: '18rem' }}>
//  <img src="public/r2.jpg" width="100%" height="300"/>
//  <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </Card.Text>
//          <Button variant="primary">Go somewhere</Button>
//        </Card.Body>
//      </Card>
//          </Col>

//          <Col>
//          <Card style={{ width: '18rem' }}>
//  <img src="public/r3.jpg" width="100%" height="300"/>
//  <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </Card.Text>
//          <Button variant="primary">Go somewhere</Button>
//        </Card.Body>
//      </Card>
//          </Col>
        
//          <Col>
//          <Card style={{ width: '18rem' }}>
//  <img src="public/r1.jpg" width="100%" height="300"/>
//  <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </Card.Text>
//          <Button variant="primary">Go somewhere</Button>
//        </Card.Body>
//      </Card>
//          </Col>

//          <Col>
//          <Card style={{ width: '18rem' }}>
//  <img src="public/r1.jpg" width="100%" height="300"/>
//  <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//        </Card.Body>
//      </Card>
//          </Col>

//          <Col>
//          <Card style={{ width: '18rem' }}>
//  <img src="public/r1.jpg" width="100%" height="300"/>
//  <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </Card.Text>
//          <Button variant="primary">Go somewhere</Button>
//        </Card.Body>
//      </Card>
//          </Col>

//          <Col>
//          <Card style={{ width: '18rem' }}>
//  <img src="public/r1.jpg" width="100%" height="300"/>
//  <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </Card.Text>
//          <Button variant="primary">Go somewhere</Button>
//        </Card.Body>
//      </Card>
//          </Col>

//          <Col>
//          <Card style={{ width: '18rem' }}>
//  <img src="public/r1.jpg" width="100%" height="300"/>
//  <Card.Body>
//          <Card.Title>Card Title</Card.Title>
//          <Card.Text>
//            Some quick example text to build on the card title and make up the
//            bulk of the card's content.
//          </Card.Text>
//          <Button variant="primary">Go somewhere</Button>
//        </Card.Body>
//      </Card>
//          </Col>
        
//        </Row>
//      </Container>

//          </>
//      )
//  }

//  export default App;

//-------------------------------------------------------------------------

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import NoPage from "./NoPage";



// const App=()=> {
//   return(
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/"element={<Layout/>} >
//       <Route index element={<Home/>}/>
//       <Route path="/home" element ={<Home/>}/>
//       <Route path="/about" element={<About/>}/>
//       <Route path="/contact" element={<Contact/>}/>
//       <Route path="*" element={<NoPage/>}/>



//     </Route>
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }
// export default App;

//---------------------------------------------------------------------------

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./Home";
// import About from "./About";
// import Service from "./Service";
// import Contact from "./Contact";
// import NoPage from "./NoPage";



// const App=()=> {
//   return(
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/"element={<Layout/>} >
//       <Route index element={<Home/>}/>
//       <Route path="/home" element ={<Home/>}/>
//       <Route path="/about" element={<About/>}/>
//       <Route path="/service" element={<Service/>}/>
//       <Route path="/contact" element={<Contact/>}/>
//       <Route path="*" element={<NoPage/>}/>



//     </Route>
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }
// export default App;
//-----------------------------------------------------------------

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import NoPage from "./NoPage";
import CompanyService from "./CompanyService";
import ProductService from "./ProductService";
import SellsService from "./SellsService";



const App=()=> {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Layout/>} >
      <Route index element={<Home/>}/>
      <Route path="/home" element ={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>} >
          <Route path="companyservice" element={<CompanyService/>}/>
          <Route path="productservice" element={<ProductService/>}/>
          <Route path="sellsservice" element={<SellsService/>}/>
      </Route>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<NoPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;

//-----------------------------------------------------

// const App=()=>{
 
//   const display=()=>{
//     alert("this is alert btn")
//   }

//   return(
//     <>
//     <h1> Welcome to React Events</h1>
//     <button onClick={display}> Click Here</button>
//     </>
//   )
// }
// export default App;

//--------------------------------------------------------

// const App=()=>{

//   const myName=(nm)=>{

//     alert("My name : "+ nm +" from Bhopal!);
//   }

//   return(
//     <>
//     <h1> Welcome to React Events</h1>
//     //     <button onClick={()=>{ myname("Arun") }}> Click Here </button>
//     </>
//   )
// }
// export default App;

//-------------------------------------------------------------------------------
// const App=()=>{

//   const myName=(fnm,snm)=>{
//     alert{"My name : "+ fnm +" " +snm+ "from Bhopal!}
// }

// return(
//        <>
//        <h1> Welcome to React Events</h1>
//        //     <button onClick={()=>{ myName("Rohan", "Patil")}}> Click Here </button>
//        </>
//      )
//    }
//    export default App;

//------------------------------------------------------------------------

// const App=()=>{

//   const display=(nm, b)=>{
//     alert(nm+ " Event Type: "+b.type)
//   }

//   return(
//     <>
//     <h1> Welcome to React Events</h1>

//     <button onClick={(e)=>{display("ranu",e)}}> Click Here</button>
//     </>
//   )
// }
// export default App;

//----------------------------------------------------------------------------

// const App=()=>{

//   const display=(e)=>{
//     alert(" Event Type: "+e.type)
//   }

//   return(
//     <>
//     <h1> Welcome to React Events</h1>

//     <button onClick={display}> Click Here</button>
//     </>
//   )
// }
// export default App;

//----------------------------------------------------------------------------

// const App=()=>{

//   const myval=(e)=>{
//    let nm=e.target.name;
//    let val=e.target.value;
//    let typ=e.target.type;
//    alert("name : "+nm + " Value : "+val+" Type : "+typ+" Event : "+ e.type);
//   }

//   return(
//     <>
//     <h1> Welcome to React Events</h1>

//     <button type="button" name="btn1" value="mybtn" onClick={myval} >Click Here!!!</button>
//     </>
//   )
// }
// export default App;

//----------------------------------------------------------------------------------------------

// const App=()=>{
//   const getval=(e)=>{
//     let nm=e.target.name;
//     let val=e.target.value;
//     alert{"Name : "+ nm + "Value :"+ val}
//   }

//   return(
//     <>
//     <h1> Welcome to React Events</h1>
//     enter name : <input type="text" name="stuname" value="bhopal" onClick={getval}/>
//     </>
//   )
// }
// export default App;

//-----------------------------------------------------------------------------------------
// import {useState} from "react";
// const App=()=>{

//   const [name,setName]= useState("Arun");
//   return(
//     <>
//     <h1>Hello we are cybrom students : {name} </h1>
//     <button onClick={()=>{setName("Tarun")}}> Click Here</button>
//     </>
//   )

// }
// export default App;
//-------------------------------------------------------------------

// import { useState } from "react";
// const App=() =>{
//   const [color, setColor]=useState("Red");

//   const myColor=()=>{
//     setColor("Green")
//   }

//   return(
//     <>
//     <h1> My Favourite Color : {color} </h1>
//     <button onClick={myColor}> Click Here </button>
//     </>
//   )
// }
// export default App;

//-------------------------------------------------------------

// import { useState } from "react";

// const App=()=>{
//   const [color, setColor]=useState("red");

//   return(
//     <>
//     <h1 style={{color:color}}>My Favourite Color : {color}</h1>

//     <button onClick={()=>{setColor("green")}}> Green Color</button>
//     <button onClick={()=>{setColor("blue")}}> Green Color</button>
//     <button onClick={()=>{setColor("orange")}}> Green Color</button>
//     <button onClick={()=>{setColor("pink")}}> Green Color</button>
//     <button onClick={()=>{setColor("yellow")}}> Green Color</button>
//     </>
//   )
// }
// export default App;

//----------------------------------------------------------------

// import { useState } from "react";

// const App=()=>{
//   const [cnt, setCnt]=useState(0);
//   const myInc=()=>{
//     setCnt(cnt+1)
//   }
//   const myDec=()=>{
//     setCnt(cnt-1)
//   }

// const myReset=()=>{
//   setCnt(0)
// }
// return(
//   <>
//   <center>
//     <h1>Welcome to Counter App</h1>
//     <h2> My Count : {cmt} </h2>
//     <button onClick={myInc}>Increament</button>
//     <button onClick={myDec}> Decrement</button>
//     <button onClick={myReset}> Reset</button>
//   </center>
//   </>
// )
// }
// export default App;