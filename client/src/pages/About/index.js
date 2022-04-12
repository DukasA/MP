import React from 'react';
import styles from './About.module.scss';
import { DiReact } from "react-icons/di";
import { HiCheck } from "react-icons/hi";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { Title } from '../../utils/newTitle';

function About() {
    Title('About Page');
    return (
        <div className={styles.aboutBlock}>
            <div className={styles.bg__bl}></div>
            <div className={styles.content}>
                <div className={styles.title}>
                    Plugi<br/>
                    &#x21F3;<br/>
                    <span>junior front-end developer</span>
                </div>
                <div className={styles.legend}>
                    I studing at the <span>Faculty of Computer Science</span> in Poland. Enthusiasm and purposefulnes are my qualities. <span>I strive</span> to add <span>value</span> to the team with fresh perspectives and innovative ideas. <span>Looking for a job</span> in a web development <span>company</span>.
                </div>
                <div className={styles.skillsBlock}>
                    <h3 className={styles.skillsBlock__title}>Skills:</h3>
                    <ul className={styles.skillsList}>
                        <li className={styles.skillItem}>
                            <DiReact className={styles.icon} />
                            <div className={styles.skillItem__name}>React js</div>
                            <HiCheck className={styles.level}/>
                            <HiCheck className={styles.level}/>
                        </li>
                        <li className={styles.skillItem}>
                            <DiHtml5 className={styles.icon} />
                            <div className={styles.skillItem__name}>HTML5</div>
                            <HiCheck className={styles.level}/>
                            <HiCheck className={styles.level}/>
                            <HiCheck className={styles.level}/>
                            <HiCheck className={styles.level}/>
                        </li>
                        <li className={styles.skillItem}>
                            <DiCss3 className={styles.icon} />
                            <div className={styles.skillItem__name}>CSS3</div>
                            <HiCheck className={styles.level}/>
                            <HiCheck className={styles.level}/>
                            <HiCheck className={styles.level}/>
                            <HiCheck className={styles.level}/>
                        </li>
                        <li className={styles.skillItem}>
                            <DiSass className={styles.icon} />
                            <div className={styles.skillItem__name}>SASS</div>
                            <HiCheck className={styles.level}/>
                            <HiCheck className={styles.level}/>
                            <HiCheck className={styles.level}/>
                            <HiCheck className={styles.level}/>
                        </li>
                        <li className={styles.skillItem}>
                            <DiJavascript1 className={styles.icon} />
                            <div className={styles.skillItem__name}>JavaScript</div>
                            <HiCheck className={styles.level}/>
                            <HiCheck className={styles.level}/>
                            <HiCheck className={styles.level}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;