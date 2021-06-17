import React from 'react';
import {Nav} from "react-bootstrap"
import {BrowserRouter as Link} from "react-router-dom";

function NavbarMenu() {
    return (
       
        <Nav> 
            <ul>
                <li>
                <Link to= '/test'>Test</Link>
                </li>
                
              
                
            </ul>
      </Nav>
            
      
    )
}

export default NavbarMenu
