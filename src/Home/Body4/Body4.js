import React from 'react'
import graphicmobile from './graphic-mobile.webp'
import iconjunior from './icon-junior.webp'
import iconapp from './icon-app.webp'
import iconmod from './icon-mod.webp'
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import './Body4.css'
import Body41 from './Body41'
const Body4 = () => {
    return (
        <div className='Component4'>
            <div className='Component4_wrap'>
                <div className='Component4_top'>
                    <h1>
                        3 Highly-Rated Mobile Apps for Learning Code
                    </h1>
                    <p>Download Tynker apps and learn to code on the go.</p>
                    <button>LEARN MORE</button>
                </div>
                <div className='Component4_bottom'>
                    <img src={graphicmobile} />
                    <div className='Comp_wrap'>
                        <Body41 img={iconjunior} h2='Tynker Junior' p1='Tap-Tap picture coding with voice-overs. Pre-readers solve story-based puzzles and build their first programs in coding sandboxes. Ages 5-7' p2='4.5' p3='2,200+ reviews' icon={<MdOutlineStarHalf />} />
                        <Body41 img={iconapp} h2='Tynker' p1='Drag-and-drop block coding with a full-featured workshop. Build games and apps, compose music and art, control smart devices, and much, much more. Ages 7-12' p2='4.7' p3='10,400+ reviews' icon={<MdOutlineStarHalf />} />
                        <Body41 img={iconmod} h2='Mod Creator' p1='Drag-and-drop Minecraft modding. Design skins, blocks and items. Modify mob behaviors. Create mods and add ons. Explore worlds! Ages 7-12' p2='4.0' p3='3,300+ reviews' icon={<MdOutlineStarOutline />} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Body4