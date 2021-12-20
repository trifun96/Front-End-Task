import React from 'react';
import '../navbar/navbar.css';
import { Link } from 'react-router-dom';



class Navbar extends React.Component{

 
    
    render() {
        return(
          <div className="navbar" >
              <ul className="navigation">
                  <Link to="/">
                      <li>Home</li>
                  </Link>
                  <Link to="/skills">
                      <li>Skills</li>
                  </Link>
                  <Link to="/static">
                      <li>Static</li>
                  </Link>
              </ul>

          </div>
        )
    }
}

export default Navbar;
