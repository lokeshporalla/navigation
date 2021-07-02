
import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import CustomersDetails from './master/Customers';
import StaffDetails from './master/StaffDetails';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Home from './master/Home';
import Aboutus from './master/Aboutus';
import EditFrom from './master/EditPage';
import DeleteForm from './master/DeleteForm';
import Button from 'react-bootstrap/Button';
import Jumbotron from "react-bootstrap/Jumbotron";
import 'bootstrap/dist/css/bootstrap.min.css';






// function LinksDetails() {

//   return (


//     <div>
// <Link to='./Home'>Home</Link><br />
// <Link to='./CustomerDetails'>customerDetails</Link> <br />
// <Link to='./StaffDetails'>StaffDetails</Link>

//     </div>
//   );
// }

// function RouteDetails(){


//   return(

//     <div>
//       <Switch>
//       <Route exact path="/StaffDetails">
//             <StaffDetails />
//           </Route>
//         <Route path="/Home" component={Home} />
//         <Route path="/customerDetails" component={CustomersDetails} />
//         <Route path="/StaffDetails" component={StaffDetails} />

//       </Switch>

//     </div>
//   );
// }


 function App(){
   return (
   <div className="App">
      
{/*         
       <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
       
  <ReactBootStrap.Navbar.Brand href="ClearFocus">ClearFocus</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="Home">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="Aboutus">About Us</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="Master" id="collasible-nav-dropdown">
      <ReactBootStrap.NavDropdown.Item href="DropDown" onClick="customerdetails"> Customers </ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="Services">Projects</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="Carrers" onClick="staffdetails">StaffDetails</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="OurProjects">UpComing</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="ContactUs">Contact Us</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="Logout">
        Logout
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>

<Router>
<LinksDetails />
<br />
<RouteDetails />
</Router> */}

 <Router>
         <div>
          <Jumbotron className='jumbo'>
          <nav className="navbar" flex>

              <a className="nav-item"><Link className=" txt-white nav-link" to="/"><span className="spm">Home</span></Link></a>
              <a className="nav-item"><Link className="nav-link txt-white" to="/Aboutus"><span className="spm">Aboutus</span></Link></a>
              <a className="nav-item"><Link className="nav-link txt-white" to="/CustomersDetails"><span className="spm">CustomerDetails</span></Link></a>
              <a className="nav-item"><Link className="nav-link txt-white" to="/StaffDetails"><span className="spm">StaffDetails</span></Link></a>
            </nav>
            </Jumbotron>
           <Route exact path="/" component={Home} />
           <Route path="/CustomersDetails" component={CustomersDetails} />
           <Route path="/StaffDetails" component={StaffDetails} />
           <Route path="/Aboutus" component={Aboutus} />
           <Route path="/EditFrom" component={EditFrom} />
           <Route path="/DeleteForm" component={DeleteForm} />
           </div>
       </Router> 
      
    </div>
  );
}



export default App;
