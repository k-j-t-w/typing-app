import '../styles/topNav.css'
import { Link } from 'react-router-dom';
import { useAuth } from "../hooks/AuthProvider";

function TopNav() {
    const auth = useAuth();
    return (
        <div className='topnav-cont'>
            <div className='topnav'>
                <div className='topnav-title'>
                    <div><Link to='/' className="custom-link">KeyKraze</Link></div>
                </div>
                <div className='topnav-options'>
                    {/* <div className='topnav-option'>
                        <Link to='/practice' className="custom-link">Practice</Link>
                    </div> */}
                    <div className='topnav-option'>
                        <Link to='/' className="custom-link">Typing Test</Link>
                    </div>
                    {/* <div className='topnav-option'>My Stats</div> */}
                    <div className='topnav-option'>
                        <Link to='/leaderboard' className="custom-link">Leaderboard</Link>
                    </div>
                    <div className='topnav-option'>
                        <Link to='/donut' className="custom-link">Donut</Link>
                    </div>
                    {!auth.user ? (
                        <>
                            <div className='topnav-option'>
                                <Link to='/login' className="custom-link">Login</Link>
                            </div>
                            <div className='topnav-option'>
                                <Link to='/signup' className="custom-link">Sign Up</Link>
                            </div>
                        </>
                    ) : (
                        <button className='topnav-option' onClick={auth.logOut}>
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TopNav;