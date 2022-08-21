import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.module.css";


export default function Navbar({ userData, logOut }) {



  return (
    <nav className="navbar navbar-expand-lg navbar-ligh " id="mainNAv">
      <div className="container-fluid">
       
        <Link className="navbar-brand logo " to="/">
        Mr.Olive
        </Link>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {userData && (
              <>
                
             
              </>
            )}
          </ul>
        </div>
        <ul className="d-flex list-unstyled m-0">
          
         

          {userData ? (
            <>
              <li className="nav-item">
                <span className="nav-link" onClick={logOut} style={{cursor:'pointer'}}>
                  LogOut
                </span>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item ">
                <Link className="nav-link" to="login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="register">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>

    
  );
}
