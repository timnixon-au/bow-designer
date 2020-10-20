import React, { ChangeEvent, Component, MouseEvent, useState, useEffect } from "react";
import { MDBContainer, MDBBtn } from "mdbreact";
import { createBow, getAllDesigns } from './../api/'

export const Preview = () => {

const [bowDetail, setBowDetail] = useState('');
const [bows, setBows] = useState([]);

let res

useEffect(() => {
    getAllDesigns.then((res:any) => {
      setBows(res);
      console.log(res);
    });
  }, []);

const resetInputField = () => {
    setBowDetail('')
    return (<></>)
}

const handleBowDetailChange:any = (event:any) => {
    console.log(event.target.value);
    setBowDetail(event.target.value);
    return (<></>)
  }

const handleClick = (event :any) => {
    console.log(process.env.DB_KEY)
    event.preventDefault();
    createBow(bowDetail).then((res:any) => {
      console.log('Expense details added to the database');
    });
    resetInputField();
    return (<></>)
}
    return (
        <MDBContainer fluid>
            <input type="text" onChange={handleBowDetailChange}></input>
            <MDBBtn onClick={handleClick}>Click Me</MDBBtn>
        </MDBContainer>
    )
}