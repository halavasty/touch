import "./Dropdown_person.scss";
import React, { useState } from 'react';
import person from "../../assets/image 51.svg";
/* import {Dropmenu} from "./Dropmenu"; */
import {Btn_sms} from "../Btn_sms";
import {Btn_notification} from "../Btn_notification";
import {Btn_down} from "./Btn_down";
import personOne from "../../assets/image 54.svg";
import personTwo from "../../assets/image 54.svg";
import persona from "../../assets/image 55.svg";




export const Dropdown_person = () => {
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const iconOupen = function () {
    console.log('../../assets/image 54.svg');
  };
  const iconOupenTwo = function () {
    console.log('../../assets/image 54.svg');
  };
  const iconOupenThree = function () {
    console.log('../../assets/image 55.svg');
  };

  return (
    <div className="Dropdown_person">    
      <Btn_notification />
      <Btn_sms />
        <button  id="menu" className={open ? 'Dropdown-Button active' : 'Dropdown-Button'} onClick={handleOpen}><img src={person} className="person" alt="image"/>  
          {open ? (
          <div className="New">
        <div  onClick={iconOupen}  className="submenu-dropdown"><img src={personOne} className="person" alt="image"/></div>
        <div onClick={iconOupenTwo} className="submenu-dropdown" ><img src={personTwo} className="person" alt="image"/></div>
        <div onClick={iconOupenThree} className="submenu-dropdown" ><img src={persona} className="person" alt="image"/></div>
        </div>
      ) : null}
    </button>   
          
      <Btn_down />
    </div>
  )


};