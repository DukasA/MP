import React,{useState,useEffect, useContext} from 'react';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import AppRouter from './components/AppRouter';
import { observer } from 'mobx-react-lite';
import {Context} from './index';
import { check } from './http/UserAPI';

const App = observer(() => {

  const [menuActive, setMenuActive] = useState(false);
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      user.setUser(true);
      user.setIsAuth(true);
      if (data.role === 'ADMIN') {
        user.setIsAdmin(true);
      } else {
        user.setIsAdmin(false);
      }
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <h1>LOADIIING.....</h1>
  }

  return (
    <div className="App">
      <div className="main">
        <Router>
        <Sidebar active={menuActive} setActive={setMenuActive}/>
        <GiHamburgerMenu className='menuBurger' onClick={() =>setMenuActive(!menuActive)}/>
              <AppRouter/>
        </Router>
      </div>
    </div>
  );
});

export default App;
