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
import './App.css';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar />
        <div class='app-wrapper-content'>
          <Routes>
            <Route path='/*' element={<Profile state={props.state.profilePage}/>} />
            <Route path='/profile' element={<Profile 
              addPost={props.addPost} state={props.state.profilePage}/>} />
            <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>} />
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