import { observer } from 'mobx-react-lite';
import React,{useState, useContext} from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import { registration, login } from '../../http/UserAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, NEWS_ROUTE, ADMIN_ROUTE } from '../../utils/consts';
import styles from './Auth.module.scss';
import {Context} from '../../index';
import { Title } from '../../utils/newTitle';

const Auth = observer(() => {
    Title('Auth Page');
    const {user} = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user);
            user.setIsAuth(true);
            if (data.role === 'ADMIN') {
                user.setIsAdmin(true)
                history(ADMIN_ROUTE);
            } else {
                user.setIsAdmin(false)
                history(NEWS_ROUTE);
            }
            window.location.reload();
        } catch (e) {
            alert(e.response.data.message);
        }
    }
    return (
        <div className={styles.auth}>
            <div className={styles.auth__header}>{isLogin ? 'Authorization' : 'Registration'}</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Email"/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Password"/>
            {isLogin ? 
            
                <div className={styles.auth__links}>Don't have an account? <NavLink to={REGISTRATION_ROUTE} className={styles.auth__links__item}> - Register</NavLink></div>
                :
                <div className={styles.auth__links}>Have an account? <NavLink to={LOGIN_ROUTE} className={styles.auth__links__item}> - Login</NavLink></div>
            }
            <button onClick={click} className={styles.auth__btn}>{isLogin ? 'Login' : 'Register'}</button>
        </div>
    )
});

export default Auth;