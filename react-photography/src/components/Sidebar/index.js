import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/Alex-1.png'
import LogoSubtitle from '../../assets/images/Alex-logos_white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCamera, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo"/>
                <img className="sub-logo" src={LogoSubtitle} alt="slobodan"/>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>

                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faCamera} color="#4d4d4e"/>

                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>

                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href=''>
                        <FontAwesomeIcon icon={faDownload} color="#4d4d43"/>
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default Sidebar