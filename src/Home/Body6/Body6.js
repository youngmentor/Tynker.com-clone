import React from 'react'
import './Body6.css'
import Ass from './Assl.png'
import Sense from './Sense.webp'
import Digital from './Digital.webp'
import Smart from './Smart.png'
import Parents from './Parents.png'
import ParentsAward from './ParentsAward.webp'
import National from './National.png'
import Mom from './Mom.png'
import Student from './Students.png'
import Teachers from './Teachers.png'
import Parentss from './Parentss.png'
import Body61 from './Body61'
import TynkerSmall from './TynkerSmall.png'
import Gift from './Gift.png'
import Wig from './Wig.png'
import { BsChevronRight } from "react-icons/bs";
import { BsQuestionCircleFill } from "react-icons/bs";
const Body6 = () => {
  return (
    <div className='Component7'>
    <div className='Component7_head_wrap' >
        <div className='Component7_head'>
            <h1>Join Tynker's Global Community</h1>
            <button>SIGN UP FREE</button>
        </div>

        <div className='absolute_images'>
            <div className='absolute_images1'>
                <div className="hp-control-map-label-content">
                    <b>
                        60 <br />Million
                    </b>
                    students
                </div>
            </div>

            <div className='absolute_images2'>
                <div className="hp-control-map-label-content">
                    <b>
                        60 <br />Million
                    </b>
                    students
                </div>
            </div>

            <div className='absolute_images3'>
                <div className="hp-control-map-label-content">
                    <b>
                        60 <br />Million
                    </b>
                    students
                </div>
            </div>
        </div>

        <div className='Component7_card'>
            <Body61 img={Student}  height={240} p1='Tynker Featured Maker' p=' I thought a game was going to be extremely hard to make, but Tynker made it really easy.' />
            <Body61 img={Parentss}  height={290} p1="Charlotte R." p2="Parent | Melbourne, Australia" p="There's so much opportunity once they understand how coding works. It's amazing to see them create incredible things themselves." />
            <Body61 img={Teachers}  height={240} p1="Valerie S." p2="5th Grade Teacher | California, US" p="Tynker has made programming fun, exciting, and simple and will help lead kids into their future." />
        </div>

    </div>

    <div className='Component7_wrap'>
        <div className='Component7_images'>
            <div className='Component7_images_wrap'>
                <img src={Sense} />
                <img src={Ass} />
                <img src={Smart} />
                <img src={Parents} />
                <img src={Wig} />
                <img src={National} />
                <img src={Mom} />
                <img src={Digital} />
                <img src={ParentsAward} />
            </div>

        </div>
        <div className='Ul_wrap'>
            <h1>Frequently asked questions</h1>
            <ul>
                <li> <BsChevronRight/> Is coding good for kids?</li>
                <li> <BsChevronRight/>  How do I start my child coding?</li>
                <li> <BsChevronRight/> What age is best to introduce coding to kids?</li>
                <li> <BsChevronRight/> Which is the best coding for kids program?</li>
                <li> <BsChevronRight/> Why is coding needed?</li>
                <li> <BsChevronRight/> Why should we use Tynker coding for kids?</li>
                <li> <BsChevronRight/> How do I teach my 7 year old code?</li>
                <li> <BsChevronRight/> What options are there for coding for teens?</li>
                <hr />
            </ul>
        </div>
        <div className='footer'>
            <div className='footer_wrap'>
                <div className='footer_wrap_top'>
                    <div className='footer_wrap_top1'>
                        <h5>ABOUT</h5>
                        <p>
                            Tynker is the world’s leading K-12 creative coding
                            platform, enabling students of all ages to learn to
                            code at home, school, and on the go. Tynker’s highly
                            successful coding curriculum has been used by one in
                            three U.S. K-8 schools, 100,000 schools
                            globally, and over 60 million kids across 150 countries.
                        </p>
                    </div>
                    <div className='footer_wrap_top2'>
                        <h5>RESOURCES</h5>
                        <p>Blog</p>
                        <p>About Us</p>
                        <p>Press</p>
                        <p>Jobs</p>
                        <p>Mobile Apps</p>
                        <p>Coding eBooks</p>
                        <p>Forum</p>
                        <p>Store</p>
                        <p>CS Authors</p>
                    </div>
                    <div className='footer_wrap_top2'>
                        <h5>PARENTS</h5>
                        <p>Overview</p>
                        <p> Curriculum</p>
                        <p> Live Classes</p>
                        <p>Give a Gift</p>
                        <p>Redeem</p>
                        <p> Why Coding</p>
                        <p>Featured Makers</p>
                        <p>Plans & Pricing</p>

                    </div>
                    <div className='footer_wrap_top2'>
                        <h5>  EDUCATORS</h5>
                        <p>Overview</p>
                        <p>Elementary</p>
                        <p>Middle School</p>
                        <p>High School</p>
                        <p>AP CS Courses</p>
                        <p>PD</p>
                        <p>Hour of Code</p>
                        <p>STEM Projects</p>
                        <p>Request a Quote</p>
                    </div>
                    <div className='input'>
                        <h5>PARENT NEWSLETTER</h5>
                        <input placeholder='Enter Your Email' />
                        <button cla >OK</button>
                    </div>
                </div>
                <hr />
                <div className='footer-wrap'>
                <div className='footer_wrap_bottom'>
                    <img src={TynkerSmall} />
                    <p>© 2022 Neuron Fuel</p>
                    <p>Terms</p>
                    <h5>Conditions PRIVACY POLICY </h5>
                    <p>Kids Online Safety</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                </div>
                </div>

            </div>
            <div className='stickey_footer'>
                <img src={Gift} />
                <h2>Keep Learning how to code With Tynker</h2>
                <button>NOW 20% OFF</button>
            </div>
            <div className='Question_div' >
                <BsQuestionCircleFill  style={{fontSize:40, color:'white'}}className='Question'/>
            </div>

        </div>
    </div>
</div>
  )
}

export default Body6