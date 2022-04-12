import React, {useState, useContext, useEffect} from 'react';
import styles from './Sidebar.module.scss';
import {NavLink, useNavigate} from 'react-router-dom';
import { DiGithubBadge } from "react-icons/di";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import {Context} from '../../index';
import { observer } from 'mobx-react-lite';

const Sidebar = observer(({ active, setActive }) => {

    const {user} = useContext(Context);
    const history = useNavigate();

    const logout = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
        setActive(false);
        history('/')
        window.location.reload();
        alert('You are logged out');
    }
    return (
        <div className={active ? styles.sidebar__active : styles.sidebar}>
            <div className={styles.sidebar__header}>
                <div className={styles.avatar}>
                    <img src="img/avatar.jpg" alt="avatar" />
                </div>
                <div className={styles.name}>
                    Plugi
                    <img src={`../../../img/ukraine.png`}/>
                </div>
                <ul className={styles.social__list}>
                    <li className={styles.list__item}>
                        <a href="https://github.com/DukasA" target="_blank" className={styles.list__item__link}>
                            <DiGithubBadge className={styles.gitHub}/>
                        </a>
                    </li>
                    <li className={styles.list__item}>
                        <a href="" target="_blank" className={styles.list__item__link}>
                            <AiFillInstagram className={styles.instagram}/>
                        </a>
                    </li>
                    <li className={styles.list__item}>
                        <a href="" target="_blank" className={styles.list__item__link}>
                            <FaTelegram className={styles.telegram}/>
                        </a>
                    </li>
                </ul>
            </div>
            <nav>
                <ul className={styles.nav__list}>
                    <li className={styles.list__item}>
                        <NavLink to='/' className={styles.list__item__link} onClick={() => setActive(false)}>Home</NavLink>
                    </li>
                    <li className={styles.list__item}>
                        <NavLink to='/about' className={styles.list__item__link} onClick={() => setActive(false)}>About</NavLink>
                    </li>
                    <li className={styles.list__item}>
                        <NavLink to='/portfolio' className={styles.list__item__link} onClick={() => setActive(false)}>Portfolio</NavLink>
                    </li>
                    <li className={styles.list__item}>
                        <NavLink to='/contact' className={styles.list__item__link} onClick={() => setActive(false)}>Contact</NavLink>
                    </li>
                    <li className={styles.list__item}>
                            <NavLink to='/news' className={styles.list__item__link} onClick={() => setActive(false)}>News</NavLink>
                    </li>
                    {user.isAuth && user.isAdmin  ?
                        <li className={styles.list__item}>
                            <NavLink to='/admin' className={styles.list__item__link} onClick={() => setActive(false)}>Admin Panel</NavLink>
                            <br/>
                            <NavLink to='/' className={styles.list__item__link} onClick={() => logout()}>Logout</NavLink>
                        </li>
                    :
                    user.isAuth && !user.isAdmin ?
                        <li className={styles.list__item}>
                            <NavLink to='/' className={styles.list__item__link} onClick={() => logout()}>Logout</NavLink>
                        </li>
                    :
                        <li className={styles.list__item}>
                            <NavLink to='/login' className={styles.list__item__link} onClick={() => setActive(false)}>Login</NavLink>
                        </li>
                    }
                </ul>         
            </nav>
        </div> 
    );
});

export default Sidebar;