import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import logo from './cute-hamster.png';
import './App.css';
import './main.css';
import history from './history';
import { Icon } from 'antd';
import TagNote from './tagnote';
import Biodata from './biodata';

class App extends Component {
    
    
    
  render() {
     
      
    return (
        <HashRouter>
     <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title titleColor">JL Playground</h1>
        </header>            
            <ul className="header">
            <li><NavLink to="/biodata">Biodata</NavLink></li>          
            <li><NavLink to="/tagnote">TagNote</NavLink></li>
         
          </ul>
          <div className="content">
            <Route path="/tagnote" component={TagNote}/>
            <Route path="/biodata" component={Biodata}/>
           
          </div>
            
            <footer className="App-footer">
           
                    <a href="https://facebook.com/jian.liang93" target="_blank">
                        <Icon type="facebook" className="iconMargin" style={{ fontSize: 36 }}/>
                    </a>   
               
                    <a href="https://linkedin.com/in/phan-jian-liang-02405915b" target="_blank">
                      <Icon type="linkedin" className="iconMargin" style={{ fontSize: 36 }}/>
                    </a>
               
              
            </footer>
      </div>
         </HashRouter>
    );
  }
}


export default App;
