import React from 'react'
import "./navbar.css"
import logo from "../../images/S.png"
import { Button } from "@chakra-ui/react";
const Navbar = () => {
  return (
      <nav>
          {/* <div>
              <img src={logo} alt="logo" />
          </div> */}
          <div className="nav_link">
              <a href="">Booking</a>
              <a href="">Facilities</a>
              <a href="">About Us</a>
              <a href="">Location</a>
              <a href="">Contacts</a>
          </div>
          <div className="login_btn_div">
              <Button  size="sm">
                  Login
              </Button>
          </div>
      </nav>
  );
}

export default Navbar
