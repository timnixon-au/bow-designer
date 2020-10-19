import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import { Designs } from '../Components/Designs'
import { SwatchesGallery } from './../Components/SwatchesGallery'
import { Preview } from './../Components/Preview'

export const Home = () => {
    return (
        <MDBContainer fluid>
            <Designs Name="Peanut"/>
            <SwatchesGallery />
            <Preview />
        </MDBContainer>
    )
}