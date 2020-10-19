import React, { Component } from "react";
import { MDBContainer,MDBRow, MDBCol } from "mdbreact";

export const Designs = (props:any) => {
    return (
        <MDBContainer fluid>
            <MDBRow>
            <div className="d-inline-flex p-2 col-example">I'm an inline flexbox container!</div>
            </MDBRow>
            
            <MDBRow>
                <MDBCol md="4">
                    <img src="./../../images/logo.png"></img>
                    <p className="align-center">{props.Name}</p>
                </MDBCol>
                <MDBCol md="4">
                <img src="./../../images/logo.png"></img>
                    <p className="align-center">Design 2</p>
                </MDBCol>
                <MDBCol md="4">
                <img src="./../../images/logo.png"></img>
                    <p className="align-center">Design 3</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
)
}