import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import './Header.scss'

export const Navbar = () => {
    return (
        <MDBNavbar className="justify-content-start" color="white">
            <img className="logo" src="./../images/logo.png"></img>
            <MDBNavbarBrand className="p-3">
                <div>
                    <span className="black-text">Kerri & Co Designs</span>
                    </div>
                    <div className="justify-content-start">
            <strong className="black-text">Bow Designer</strong>
            </div>
            
          </MDBNavbarBrand>  
        </MDBNavbar>
    )
}