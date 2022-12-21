// import Header from '../Header/Header'
// import { useState } from 'react'
import './Home.css'
import Body1 from './Body1/Body1'
import Body2 from './Body2/Body2'
import Body3 from './Body3/Body3'
import Body4 from './Body4/Body4'
import Body5 from './Body5/Body5'
import Body6 from './Body6/Body6'
const Home = ({ setState, state }) => {
    const Menu = (
        <div>
            <div className='Menu'>
                <div className='link'>PLAY</div>
                <div className='link'>PARENT</div>
                <div className='link'>EDUCATORS</div>
                <div className='link'>WHY CODE?</div>
                <div className='link'>GIFT</div>
            </div>
            <div onClick={() => { setState(!state) }} className='menu_lap'></div>
        </div>
    )
    return (
        <>
            <div className='Body_Wrap'>
                {state ? Menu : ''}
                <div className='Body_Contain'>
                    <div className='Head2'>
                        <div className='h2_wrap'>
                            <h2>
                                Holiday Bonus! All
                                Plans Include 2 FREE
                                Coaching Classes
                                ($120 Value)
                            </h2>
                        </div>

                    </div>
                    <Body1 />
                    <Body2 />
                    <Body3 />
                    <Body4 />
                    <Body5 />
                    <Body6 />
                </div>
            </div>
        </>

    )
}

export default Home