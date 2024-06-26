import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Footer from './components/Footer/Footer';
import Help from './components/Help/Help';
import Music from './components/Music/Music';
import Options from './components/Options/Options';
import styles from './App.module.css';
import Login from "./components/Login/Login";


const App = () => {
  
  return (
    <BrowserRouter>
      <div className={styles.appWrapper}>
        <HeaderContainer />
        <SidebarContainer />
        <div className={styles.appWrapperContent}>
          <Routes>
            <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/messages/*' element={<DialogsContainer />} />
            <Route path='/music' element={<Music />} />
            <Route path='/options' element={<Options />} />
            <Route path='/help' element={<Help />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;