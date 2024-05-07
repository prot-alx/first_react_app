import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Help from './components/Help/Help';
import Music from './components/Music/Music';
import Options from './components/Options/Options';
import styles from './App.module.css';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className={styles.appWrapper}>
        <Header />
        <Sidebar sidebarList={props.state.sidebarList}/>
        <div className={styles.appWrapperContent}>
          <Routes>
            <Route path='/*' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
            <Route path='/messages/*' element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>} />
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