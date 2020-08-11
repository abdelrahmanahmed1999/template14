import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Index from './components/Index/Index';

class App extends React.Component{
  render(){
    return (
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Index}/>
          <Route path="/contact" component={Contact}/>
        </BrowserRouter>
    );
  }
}

export default App;