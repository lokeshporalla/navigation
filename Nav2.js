import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
         <div>
          <nav className="navbar navbar-dark bg-dark flex">

              <a className="nav-item"><Link class=" txt-white nav-link" to="/"><span class="spm">1</span>Review & Schedule</Link></a>
              <a className="nav-item"><Link className="nav-link txt-white" to="/about"><span class="spm">2</span>Select Address</Link></a>
              <a className="nav-item"><Link className="nav-link txt-white" to="/contact"><span class="spm">3</span>Check Quote</Link></a>
              <a className="nav-item"><Link className="nav-link txt-white" to="/contact"><span class="spm">4</span>Order Placed</Link></a>
            </nav>
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/contact" component={Contact} />
         </div>
       </Router>

      </div>
    )
  }
}
let Home=()=>{
    return(
      <section>
        <h3> Home Page </h3>
      </section>
    )
}
export default App;