import './Body2.css'
import Banner from './hp-banner@2x.png'
import Log from './logo.png'
import Learn from './learning-path.webp'
const Body2 = () => {
    return (
        <div className='Component2'>
            <div className='Component2_wrap'>
                <div className="Component2_A">
                    <img className='image' src={Banner} />
                    <div className="Component2_A_text">
                        <img src={Log} />
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
                <div className="Component2_B">
                    <img className='image' src={Learn} />
                    <div className="Component2_B_text">
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
export default Body2