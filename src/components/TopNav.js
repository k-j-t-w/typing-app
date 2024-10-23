import '../styles/topNav.css'

function TopNav() {
    return (
        <div className='topnav-cont'>
            <div className='topnav'>
                <div className='topnav-title'>
                    <div>KeyKraze</div>
                </div>
                <div className='topnav-options'>
                    <div className='topnav-option'>Practice</div>
                    <div className='topnav-option'>Typing Test</div>
                    <div className='topnav-option'>Statistics</div>
                    <div className='topnav-option'>High Scores</div>
                    <div className='topnav-option'>Login</div>
                    <div className='topnav-option'>Logout</div>
                </div>
            </div>
        </div>
    )
}

export default TopNav;