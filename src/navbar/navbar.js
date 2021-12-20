import React from 'react';
import '../navbar/navbar.css';
import { Link } from 'react-router-dom';



class Navbar extends React.Component{

    toggleNavMenu() {
        const nav = document.getElementById("nav");
        nav.classList.toggle('active');
     ;
    }
    render() {
        return(
          <div className="navbar" >
              <ul className="navigation" id="nav">
                  <Link to="/" onClick={this.toggleNavMenu}>
                      <li>Home</li>
                  </Link>
                  <Link to="/skills" onClick={this.toggleNavMenu}>
                      <li>Skills</li>
                  </Link>
                  <Link to="/static" onClick={this.toggleNavMenu}>
                      <li>Static</li>
                  </Link>
              </ul>
                  <span onClick={this.toggleNavMenu}>
                      <img src="images/menu.png.png" className='menu-icon'></img>
                  </span>
          </div>
        )
    }
}

export default Navbar;
