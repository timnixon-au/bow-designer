import React, { ChangeEvent, Component, MouseEvent, useState, useEffect } from "react";
import { MDBContainer, MDBBtn } from "mdbreact";
import { createBow, getAllDesigns, getAllMaterials } from './../api/'

export const Preview = () => {

const [bowDetail, setBowDetail] = useState('');
const [bows, setBows] = useState([]);

let res

useEffect(() => {
    getAllMaterials.then((res:any) => {
      setBows(res);
      console.log(res);
      mapDesigns(res);
    });
  }, []);

const mapDesigns = (res:any) => {
  Map(res.resource.data)
  return (
    <div></div>
  )
}


const resetInputField = () => {
    setBowDetail('')
    return (<div></div>)
}

const handleBowDetailChange:any = (event:any) => {
    console.log(event.target.value);
    setBowDetail(event.target.value);
    return (<div></div>)
  }

const handleClick = (event :any) => {
    event.preventDefault();
    createBow(bowDetail).then((res:any) => {
      console.log('Expense details added to the database');
    });
    resetInputField();
    return (<div></div>)
}
    return (
        <MDBContainer fluid>
            <input type="text" onChange={handleBowDetailChange}></input>
            <MDBBtn onClick={handleClick}>Click Me</MDBBtn>
        </MDBContainer>
    )
}