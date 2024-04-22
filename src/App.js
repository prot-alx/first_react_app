import './App.css';
import React from "react";

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
//import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Sidebar />
      <div class='app-wrapper-content'>
        <Dialogs />
        {/*<Profile />*/}
      </div>
      <Footer />
    </div>
  );
}

export default App;