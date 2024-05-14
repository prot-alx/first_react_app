import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Footer from './components/Footer/Footer';
import Help from './components/Help/Help';
import Music from './components/Music/Music';
import Options from './components/Options/Options';
import styles from './App.module.css';


const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.appWrapper}>
        <Header />
        <SidebarContainer />
        <div className={styles.appWrapperContent}>
          <Routes>            
            <Route path='*' element={<Navigate replace to='/profile'/>}/>
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/messages/*' element={<DialogsContainer />} />
            <Route path='/Music' element={<Music />} />
            <Route path='/Options' element={<Options />} />
            <Route path='/Help' element={<Help />} />            
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;