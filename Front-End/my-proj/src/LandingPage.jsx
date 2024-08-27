import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import  './Body.css'

function LandingPage() {
  return ( 
    <>
      {/* -------------------------------- Nav Bar ---------------------------------------------- */}
      <nav className={styles.navbar}> {/* Use styles.navbar instead of navbar */}
        <div className={styles.logo}> {/* Use styles.logo instead of logo */}
          <i className="fa-solid fa-font-awesome"></i>
          <Link to="/landing-page">Landing</Link>
        </div>
        <div className={styles.menu}> {/* Use styles.menu instead of menu */}
          <div className={styles.menuLinks}> {/* Use styles.menuLinks instead of menu-links */}
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/home"><button className={styles.logIn}>Get Started</button></Link> {/* Use styles.logIn instead of log-in */}
          </div>
          <Link to="/login"><button className={styles.logIn}>Log In</button></Link>
        </div>
        <div className={styles.menuBtn}> {/* Use styles.menuBtn instead of menu-btn */}
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </>
  );
}

export default LandingPage;
