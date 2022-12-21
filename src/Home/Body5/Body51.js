import React from 'react'
import './Body.css'
import { BsChevronRight } from "react-icons/bs";
const Body51 = ({ h2, p1, p2, p3, p4, p5 }) => {
  return (
    <div className='Comp5_card'>
            <div className='Comp5_card_wrap'>
                <h2>{h2}</h2>
                <p> <BsChevronRight/> {p1} </p>
                <p><BsChevronRight/> {p2} </p>
                <p><BsChevronRight/> {p3} </p>
                <p><BsChevronRight/> {p4} </p>
                {p5 && <p><BsChevronRight/> {p5}</p>}
            </div>

        </div>
  )
}

export default Body51