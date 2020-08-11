import React from 'react';
import Home from './../Home/Home';
import About from './../About/About';
import Profile from './../Profile/Profile';
import Portfolio from './../Portfolio/Portfolio';
import Social from './../Social/Social';
import Work from './../Work/Work';
import Footer from './../Footer/Footer';

const Index= () =>{
  return (
    <div className="Index">
        <Home/>
        <Work/>
        <Portfolio/>
        <Profile/>
        <About/>
        <Social/>
        <Footer/>

    </div>
  );
}

export default Index;