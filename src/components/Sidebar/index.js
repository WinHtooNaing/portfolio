import './index.scss';
import {Link, NavLink} from'react-router-dom';
import logoS from '../../assets/images/logo-s.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,faHome , faLightbulb, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar  = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logoS} alt="logo" />
            <p>Saw Paught</p>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="tip-link" to="/tip">
                <FontAwesomeIcon icon={faLightbulb} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' 
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/win-htoo-naing-51bb79275?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoTW56V19Q2qw%2BqxlFQ3j2Q%3D%3D'
                    >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' 
                    rel='noreferrer'
                    href='https://github.com/WinHtooNaing'
                    >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' 
                    rel='noreferrer'
                    href='https://www.youtube.com/channel/UCnSOPX6Qt-Ux0pj4ckDC7SQ'
                    >
                    <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' 
                    rel='noreferrer'
                    href='https://join.skype.com/invite/qRvGU6W4tH1f'
                    >
                    <FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)
export default Sidebar;