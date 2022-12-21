import React from 'react'
import './Body3.css'
import Parents from './for-parents.webp'
import Teachers from './for-teachers.webp'
const Body3 = () => {
  return (
    <div className='Component3_main'>
            <div className='Component3_wrap'>
                <div className="Component3_A">
                    <img className='Component3_image' src={Parents} />
                    <div className="Component3_A_text">
                        <h1>Parents</h1>
                        <p>Have you caught World Cup fever yet? With matches beginning in November,
                            excitement is high all around the world. As part of the celebrations,
                            Tynker from BYJU’s has teamed up with FIFA to promote kids coding in an all new way.
                        </p>
                        <p>When you play a match in BYJU’S Coding Cup, your team runs on code that you write!
                            Can you code a smarter soccer team? You’ll learn a lot more by practicing and playing
                            and of course — scoring! Anyone of any age or skill level can play for free. This is
                            a perfect way for your child to start their love of coding!
                        </p>
                        <botton>PLAY NOW</botton>
                    </div>
                </div>
                <div className="Component3_B">
                    <img className='Component3_image' src={Teachers} />
                    <div className="Component3_B_text">
                        <h1>The #1 Coding Program for Kids and Teens</h1>
                        <p>Tynker powers the creativity of over 60 million students and serves
                            thousands of schools and educators worldwide.</p>
                        <p>Our interactive story-based learning allows kids and teens to learn the basics
                            with easy block-based coding challenges before seamlessly
                            transitioning to real-world text-based languages
                            like JavaScript and Python.</p>
                        <p>With 70+ award-winning courses, there’s a learning path for every student, no matter their age or level. We have over 5,000
                            lessons, backed by hundreds of built-in tutorials, hands-on projects and interactive assessments.</p>
                        <botton>EXPLORE CURRICULUM</botton>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Body3