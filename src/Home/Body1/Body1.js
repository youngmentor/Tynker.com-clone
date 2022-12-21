import React from 'react'
import './Body1.css'
import { MdPlayArrow } from "react-icons/md";
const Body1 = () => {
  return (
    <div className="Body1">
    <div className='Body1_text'>
        <h1>Coding For Kids and Teens Made Easy</h1>
        <p>Tynker is the fun way to learn programming and develop problem-solving & critical thinking skills. Our new bundles include live expert
            coaching to get your child off to a fast, confident start.</p>
        <div className='Body1_button'>
            <button>BUY NOW</button>
            <p>Get Started for Free</p>
        </div>

        <MdPlayArrow className='Play_button' />

    </div>
</div>
  )
}

export default Body1