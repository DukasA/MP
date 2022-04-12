import React from 'react';
import styles from './Portfolio.module.scss';
import Slider from '../../components/Slider/index';
import { Title } from '../../utils/newTitle';


function Portfolio() {
    Title('Portfolio Page');
    return (
        <div className={styles.portfolio__block} id="portfolio-block">
            <div className={styles.bg__bl}></div>
            <Slider />
        </div> 
    );
}

export default Portfolio;