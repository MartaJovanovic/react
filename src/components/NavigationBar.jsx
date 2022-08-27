import React from 'react'
import { FaPizzaSlice} from "react-icons/fa";
import { MdFastfood} from "react-icons/md";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className='navigationBar'>
      <Link to="/">Pocetna</Link>
      <Link to="/pice" className='ikonica'>
        <FaPizzaSlice />
      </Link>
      <Link to="/burgeri" className='ikonica'>
        <MdFastfood />
      </Link>
      <Link to="/korpa" className='ikonica'>
        <BsCartFill />
      </Link>
      </div>
  )
}

export default NavigationBar