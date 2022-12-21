import './Header.css'
import Logo from './Logo.png'
import Logo1 from './Logo1.png'
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { Link } from 'react-router-dom'
const Header = ({ setState, state }) => {
    return (
        <div className='Main_Header'>
            <div className='Header'>
                <div className='Child_Header'>
                    <div className='nav'>
                        {state ? <MdMenu onClick={() => { setState(!state) }} className='burger' 
                        style={{ marginLeft: 10, fontSize: 30 }} />
                            : <MdOutlineClose onClick={() => { setState(!state) }} className='burger' 
                        style={{ marginLeft: 10, fontSize: 30 }} />}
                        <div className='imgDiv'>
                            <Link to={'/'}>
                                <img className='img' style={{ width: 200 }} src={Logo} to={'/'} />
                                <img className='img1' style={{ width: 125 }} src={Logo1} to={'/'} />
                            </Link>

                        </div>
                        <div className='Nav_links'>
                            <Link className='link' to={'/Play'}> <div className='link'>PLAY</div></Link>
                            <Link className='link' to={"/Parent"}><div className='link'>PARENT</div></Link>
                            <Link className='link' to={'/Education'}><div className='link'>EDUCATORS</div></Link>
                            <Link className='link' to={"/Why"}> <div className='link'>WHY CODE?</div></Link>
                            <Link className='link' to={"/Gift"}><div className='link'>GIFT</div></Link>
                        </div>
                    </div>
                    <div className='action'>
                        <div className='Join'>JOIN FOR FREE</div>
                        <div className='Login'>LOG IN</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header