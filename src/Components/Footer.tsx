import React, { Component } from "react";
import {MDBFooter, MDBContainer} from 'mdbreact'
import './Footer.scss'

export const Footer = () => {
    return (
<MDBFooter color="blue" className="font-small pt-4 mt-4 fixed-bottom">
<div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.nixonworks.com.au"> Nixonworks </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    )
}