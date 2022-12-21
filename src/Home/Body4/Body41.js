import React from 'react'
import './Body4.css'
import { MdOutlineStarPurple500 } from "react-icons/md";
const Body41 = ({ img, h2, p1, p2, p3, icon }) => {
  return (
    <div className='Comp4'>
    <img src={img} />
    <div className='Comp4_Text'>
        <h2>{h2}</h2>
        <p>{p1}</p>
        <div className='Comp4_icons'>
            <div className='icons_wrap'>
                <div className='icons'>
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    {icon}
                </div>
                <p>{p2}</p>
            </div>
            <p>{p3}</p>
        </div>
    </div>
</div>
  )
}

export default Body41