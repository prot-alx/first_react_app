import './App.css';
import React from "react";

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Sidebar />      
      <Profile />
      <Footer />
    </div>
  );
}

export default App;