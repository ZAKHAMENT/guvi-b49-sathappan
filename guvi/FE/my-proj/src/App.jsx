import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import { useLocation } from 'react-router-dom'; // Use this if you're using react-router for routing

const App = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation(); // Hook for accessing the current location/path

    useEffect(() => {
        // Handle mobile UI interactions
        const handleMobileUI = () => {
            if (isSidebarOpen) {
                setSidebarOpen(false); // Close sidebar on mobile
            }
        };

        // Update active link based on the current path
        const setActiveClass = () => {
            const path = location.pathname;
            const page = path.substr(path.lastIndexOf('/') + 1) || 'dashboard';
            const activeLink = `${page}-link`;
            document.querySelectorAll(`.${styles.navItem}`).forEach(item => {
                item.classList.toggle(styles.active, item.classList.contains(activeLink));
            });
        };

        setActiveClass();

        window.addEventListener('resize', handleMobileUI);
        return () => window.removeEventListener('resize', handleMobileUI);
    }, [location, isSidebarOpen]);

    const toggleSidebar = () => {
        setSidebarOpen(prevState => !prevState);
    };

    return (
        <div>
            <main role="main" className={styles.containerFluid} id="code-kata-page">
                {/* Header */}
                <header className={`${styles.row} ${styles.bgWhite}`}>
                    <nav className={`${styles.col} ${styles.navbar} ${styles.navbarExpandMd} ${styles.navbarLight} ${styles.shadowSm} ${styles.guviNavheadFixed}`}>
                        <button
                            id="sidebarToggle"
                            className={styles.navbarToggler}
                            type="button"
                            onClick={toggleSidebar}
                            aria-controls="sidebar"
                            aria-expanded={isSidebarOpen}
                            aria-label="Toggle navigation"
                        >
                            <i className={styles.materialIcons}>{isSidebarOpen ? 'close' : 'menu'}</i>
                        </button>
                        <a className={styles.navbarBrand} href="#">
                            <img src="/src/images/new-guvi-logo.png" className={`${styles.lazyload} ${styles.ml3}`} alt="GUVI : Learn to code in your native language" width="95px" />
                        </a>
                        <div className={`${styles.containerFluid} ${styles.listGroup} ${styles.listGroupHorizontalMd} ${styles.userProfile}`} id="accountGroup">
                            <a className={` ${styles.btn} ${styles.pt2} `} href="/faq/">
                                <img src="/src/images/minified/faq-head-icons.png" className={styles.faqImg} alt="FAQ" />
                            </a>
                            <button className={`${styles.btn} ${styles.dropdown} ${styles.accountBoxToggler}`} type="button" data-toggle="collapse" data-target="#account-box" aria-expanded="false" aria-controls="account-box">
                                <div className={styles.gravatarWrap}>
                                    <img src="/src/images/profile-pic-sample.jpeg" className={styles.gravatar} alt="username" />
                                </div>
                            </button>
                        </div>
                    </nav>
                    {/* Sidebar */}
                    <div className={`${styles.sidebarContainer} ${isSidebarOpen ? '' : styles.sidebarCollapse}`}>
                        <div id="sidebar" className={`${styles.sidebarSticky} ${styles.shadowSm}`}>
                            <ul className={`${styles.nav} ${styles.flexColumn} ${styles.mainMenu}`}>
                                <li className={`${styles.navItem} ${styles.coursesLink}`}>
                                    <a className={styles.navLink} href="/courses/">
                                        <i className={styles.iconsCourses}></i><span>Courses</span>
                                    </a>
                                </li>
                                <hr className={styles.borderSidebar} />
                                <li className={`${styles.navItem} ${styles.codeKataLink}`}>
                                    <a className={styles.navLink} href="/code-kata/">
                                        <i className={styles.iconsCodeKata}></i><span>Code_Kata</span>
                                    </a>
                                </li>
                                <hr className={styles.borderSidebar} />
                                <li className={`${styles.navItem} ${styles.leaderBoardLink}`}>
                                    <a className={styles.navLink} href="/leader-board/">
                                        <i className={styles.iconsLeaderboard}></i>
                                        <span>Leaderboard</span>
                                    </a>
                                </li>
                                <li className={`${styles.navItem} ${styles.rewardsLink}`}>
                                    <a className={styles.navLink} href="/rewards/">
                                        <i className={styles.iconsRewards}></i>
                                        <span>Rewards</span>
                                    </a>
                                </li>
                                <li className={styles.navItem}>
                                    <a className={styles.navLink} href="/referral/">
                                        <i className={styles.iconsReferral}></i>
                                        <span>Referral</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* /Sidebar */}
                </header>
                {/* Static height */}
                <div className={styles.staticHeight}></div>
                {/* /Header */}
                <div className={styles.containerFluid}>
                    {/* Body container */}
                    <div className={styles.row}>
                        <div className={`${styles.colSm12} ${styles.offsetMd1} ${styles.colMd11} ${styles.bodyContainer}`}>
                            <div className={styles.row}>
                                <div className={`${styles.colSm12} ${styles.colMd6} ${styles.dFlex} ${styles.flexColumn} ${styles.justifyContentAround}`}>
                                    <div className={styles.pageHeader}>
                                        <h1><i className={`${styles.iconCodeKata} ${styles.productHead}`}></i>CODEKATA</h1>
                                    </div>
                                    {/* <div className={styles.contentSearchForm}>
                                        <label htmlFor="searchConcepts">Search</label>
                                        <input type="text" className={`${styles.formControl} ${styles.formRounded}`} id="searchConcepts" aria-describedby="helpId" placeholder="Search concept" />
                                        <button className={`${styles.btn} ${styles.searchBtn}`}><i className={styles.materialIcons}>search</i></button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
