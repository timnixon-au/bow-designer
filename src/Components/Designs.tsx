import React, { useState } from "react";
import { MDBContainer,MDBRow, MDBCol } from "mdbreact";

export const Designs = (props:any) => {

const handleDesignMouseOver = (e:MouseEvent) => {
    console.log('something')
}

const CalculateBorderColor = (id:string) => {
        let result
        if(id === "2") {
            result = "border-red"
        }
            return (result)
}

    return (
        <MDBContainer fluid>
            <MDBRow>
            <div className="d-inline-flex p-2 col-example">I'm an inline flexbox container!</div>
            </MDBRow>
            
            <MDBRow>
                <MDBCol md="4" onMouseOver={handleDesignMouseOver} className={CalculateBorderColor("1")}>
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