import React from 'react';
import styles from './Home.module.scss';
import {Link} from 'react-router-dom';
import { Title } from '../../utils/newTitle';

function Home() {
    Title('Home Page');
    return (
        <div className={styles.home__block} id="home-block">
            <div className={styles.bg__bl}></div>
            <div className={styles.baner}>
                Born to Create
            </div>
            <h3>Plugi</h3>
            <div className={styles.descr}>
                <p>
                    I'm a Developer
                </p>
            </div>
            <div className={styles.links}>
                <Link to='/contact'>
                    <button className={styles.btn}>
                        Hire Me
                    </button>
                </Link>
                <a href="cv/cv.png" download="CV" className={styles.cv__dovnload}>
                    <button className={styles.btn__transp}>
                        Dovnload CV
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Home;