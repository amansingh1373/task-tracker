import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import './HeaderComponent.css';

const Header = () => {
    return ( 
        <div className='header'>
            <h3 className='headertitle'>Task Board</h3>
            <User/>
        </div>
     );
}

const User = () => { 
    return (
        <div className='user'>
            <FontAwesomeIcon icon={faUser} />
        </div>
    );
};

export default Header;