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
import classes from './App.module.css';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className={classes.appWrapper}>
        <Header />
        <Sidebar />
        <div className={classes.appWrapperContent}>
          <Routes>
            <Route path='/*' element={<Profile addPost={props.addPost} profilePage={props.state.profilePage} updateNewPostText={props.updateNewPostText}/>} />
            <Route path='/profile' element={<Profile addPost={props.addPost} profilePage={props.state.profilePage} updateNewPostText={props.updateNewPostText}/>} />
            <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText}/>} />
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