import '../styles/topNav.css'
import { Link } from 'react-router-dom';

function TopNav() {
    return (
        <div className='topnav-cont'>
            <div className='topnav'>
                <div className='topnav-title'>
                    <div><Link to='/' className="custom-link">KeyKraze</Link></div>
                </div>
                <div className='topnav-options'>
                    <div className='topnav-option'>Practice</div>
                    <div className='topnav-option'>
                        <Link to='/' className="custom-link">Typing Test</Link>
                    </div>
                    <div className='topnav-option'>Statistics</div>
                    <div className='topnav-option'>High Scores</div>
                    <div className='topnav-option'>
                        <Link to='/donut' className="custom-link">Donut</Link>
                    </div>
                    <div className='topnav-option'>Login</div>
                    <div className='topnav-option'>Logout</div>
                </div>
            </div>
        </div>
    )
}

export default TopNav;