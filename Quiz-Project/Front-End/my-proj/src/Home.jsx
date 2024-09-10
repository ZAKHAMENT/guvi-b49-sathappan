import { useState, useEffect, useReducer } from 'react';
import styles from './Home.module.css'; 
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MyProfile, { ChangePassword } from './MyProfile';
import Gk from './Quizes';

// initial state for reducer
const initialState = {
    showProfile: false,
    showChangePassword: false,
    showGkPage: false,
};

// reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'SHOW_PROFILE':
            return {
                showProfile: true,
                showChangePassword: false,
            };
        case 'SHOW_CHANGE_PASSWORD':
            return {
                showProfile: false,
                showChangePassword: true,
            };
            case 'SHOW_GK':
                return {
                    showGkPage: true,
                };    
        default:
            return state;
    }
}

const Home = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [coinIconDisappear, setCoinIconDisappear] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    // UseReducer hook
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSidebarOpen(true); 
                setCoinIconDisappear(false);
            } else {
                setSidebarOpen(true); 
                setCoinIconDisappear(true);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const setActiveClass = () => {
            const path = location.pathname;
            const page = path.substr(path.lastIndexOf('/') + 1) || 'dashboard';
            const activeLink = `${page}-link`;
            document.querySelectorAll(`.${styles.navItem}`).forEach(item => {
                item.classList.toggle(styles.active, item.classList.contains(activeLink));
            });
        };

        setActiveClass();
    }, [location]);

    //  Handles using reducer funtion
    const handleProfileClick = () => {
        dispatch({ type: 'SHOW_PROFILE' });
    };

    const handleChangePassword = () => {
        dispatch({ type: 'SHOW_CHANGE_PASSWORD' });
    };

    const handleShowGkPage = () => {
        dispatch({ type: 'SHOW_GK' });
    }
    // Other Handles
    const toggleSidebar = () => {
        setSidebarOpen(prevState => !prevState);
    };

    const handleLogout = () => {
        localStorage.removeItem('$FSA_auth_token');
        navigate('/login');
    };

    return (
        <div className={styles.homeBody}>
            <main role="main" className={`${styles.containerFluid}`} id="code-kata-page">
                {/* Header sidebarWrapper */}
                <header className={` ${styles.homeHeader} ${styles.row} ${styles.bgWhite}`}>
                    <nav className={`${styles.col} ${styles.navbar} ${styles.navbarExpandMd} ${styles.navbarLight} ${styles.shadowSm} ${styles.guviNavheadFixed} ${styles.containerFluid2}`}>
                        <button
                            id="sidebarToggle"
                            className={styles.navbarToggler}
                            type="button"
                            onClick={toggleSidebar}
                            aria-controls="sidebar"
                            aria-expanded={isSidebarOpen}
                            aria-label="Toggle navigation">
                            <i className={styles.materialIcons}>{isSidebarOpen ? 'close' : 'menu'}</i>
                        </button>

                        <a className={`${styles.navbarBrand} ${styles.aHome}`} href="#">
                            <img src="/images/main-logo.jpeg" className={`${styles.lazyload} ${styles.ml3}`} alt="Site logo" width="95px" />
                        </a>
{/*  ---------------------------------- Coin conatiner --------------------------------------------- */}
                  {coinIconDisappear && (
                        <div className={`${styles.buttonNavbar} ${styles.coinContainer}`}>
                        <div className={styles.parent}>
                        <div className={styles.div1}>
                                <img src="/images/coinCoinImage.png" alt="icon" className={styles.coinIcon}></img><span className={styles.coinText}>       6900</span>    
                        </div>
                        <div className={styles.div2}>
                                <img src="/images/coinCoinImage.png" alt="icon" className={styles.coinIcon}></img><span className={styles.coinText}>       6900</span>   
                            </div>
                        </div>
                        </div>
                  )}
{/*------------------------------------------ User profile ------------------------------------*/}
                        <div className={styles.buttonNavbar}>
                            <button
                                className={`${styles.btn} ${styles.dropdown} ${styles.accountBoxToggler}`}
                                type="button"
                                data-toggle="collapse"
                                data-target="#account-box"
                                aria-expanded="false"
                                aria-controls="account-box"
                            >
                                <label className={styles.popup}>
                                    <input type="checkbox" />
                                    <div className={styles.burger} tabIndex="0">
                                        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M335 343.43H65V300.06C65 254.02 102.33 216.69 148.37 216.69H251.63C297.67 216.69 335 254.02 335 300.06V343.43Z"
                                                stroke="#191919"
                                                strokeWidth="12"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M200 186.57C235.899 186.57 265 157.468 265 121.57C265 85.6713 235.899 56.5698 200 56.5698C164.101 56.5698 135 85.6713 135 121.57C135 157.468 164.101 186.57 200 186.57Z"
                                                stroke="#6A0BFF"
                                                strokeWidth="12"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
<nav className={styles.popupWindow}>
    <legend>Actions</legend>
    <ul>
      <li>
        <button className={styles.popupBtn} onClick={handleProfileClick}>
          <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle r="4" cy="7" cx="9"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>My Profile</span>
        </button>
      </li>
      <li>
        <button className={styles.popupBtn} onClick={handleChangePassword}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" >
    <path fill="currentColor" d="M15 6a1.54 1.54 0 0 1-1.5-1.5a1.5 1.5 0 0 1 3 0A1.54 1.54 0 0 1 15 6zm-1.5-5A5.55 5.55 0 0 0 8 6.5a6.81 6.81 0 0 0 .7 2.8L1 17v2h4v-2h2v-2h2l3.2-3.2a5.85 5.85 0 0 0 1.3.2A5.55 5.55 0 0 0 19 6.5A5.55 5.55 0 0 0 13.5 1z"></path>
      </svg>  
          <span>Change Password</span>
        </button>
      </li>
      <li>
        <button className={styles.popupBtn} onClick={handleLogout}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 10.5v2a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v2M6.5 7h7m-2-2l2 2l-2 2"></path>
    </svg>
       <span>Sign out</span>
        </button>
      </li>
    </ul>
  </nav>
  </label>
</button>
</div>
 </nav>

{/*------------------------------------------------ Sidebar ---------------------------------*/}
                    <div className={styles.sidebarWrapper}>
                        <div className={`${styles.sidebarContainer} ${isSidebarOpen ? '' : styles.sidebarCollapse}`}>
                            <div id="sidebar" className={`${styles.sidebarSticky} ${styles.shadowSm}`}>
                                <ul className={`${styles.nav} ${styles.flexColumn} ${styles.mainMenu}`}>
                                    <li className={`${styles.navItem} ${styles.coursesLink}`}>
                                        <div className={`${styles.navLink} ${styles.aHome}`}>
                                            <img src="/images/question-mark.png" alt="?" width="30px" />
                                            <i className={styles.iconsCourses}></i>
                                            <span className={styles.sidebarInlineText} onClick={handleShowGkPage}>GK</span>
                                        </div>
                                    </li>
                                    <hr className={styles.borderSidebar} />
                                    <li className={`${styles.navItem} ${styles.codeKataLink}`}>
                                        <a className={`${styles.navLink} ${styles.aHome}`} href="/code-kata/">
                                            <img src="/images/parrot.png" alt="?" width="30px" />
                                            <i className={styles.iconsCodeKata}></i>
                                            <span className={styles.sidebarInlineText}>Birds</span>
                                        </a>
                                    </li>
                                    <hr className={styles.borderSidebar} />
                                    <li className={`${styles.navItem} ${styles.leaderBoardLink}`}>
                                        <a className={`${styles.navLink} ${styles.aHome}`} href="/leader-board/">
                                            <img src="/images/lion.png" alt="?" width="30px" />
                                            <i className={styles.iconsLeaderboard}></i>
                                            <span className={styles.sidebarInlineText}>Animals</span>
                                        </a>
                                    </li>
                                    <li className={`${styles.navItem} ${styles.rewardsLink}`}>
                                        <a className={`${styles.navLink} ${styles.aHome}`} href="/rewards/">
                                            <img src="/images/question-mark.png" alt="?" width="30px" />
                                            <i className={styles.iconsRewards}></i>
                                            <span className={styles.sidebarInlineText}>Rewards</span>
                                        </a>
                                    </li>
                                    <li className={`${styles.navItem} ${styles.referralLink}`}>
                                        <a className={`${styles.navLink} ${styles.aHome}`} href="/referral/">
                                            <img src="/images/question-mark.png" alt="?" width="30px" />
                                            <i className={styles.iconsReferral}></i>
                                            <span className={styles.sidebarInlineText}>Referral</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={styles.staticHeight}></div>
                {/* /Header */}
                <div className={styles.containerFluid}>
                    {/* Body container */}
                    <div className={styles.row}>
                        <div className={`${styles.colSm12} ${styles.offsetMd1} ${styles.colMd11}`}>
                            <div className={styles.bow}>
                                <div className={`${styles.colSm12} ${styles.colMd6} ${styles.dFlex} ${styles.flexColumn} ${styles.justifyContentAround}`}>
                                {state.showProfile && <MyProfile />}
                                {state.showChangePassword && <ChangePassword />}
                                {state.showGkPage && <Gk/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
