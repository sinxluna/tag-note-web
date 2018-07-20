import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './main.css';
import history from './history';
import { Icon } from 'antd';
import TagNote from './tagnote';
import Biodata from './biodata';

class App extends Component {
    
    
    
  render() {
     
      
    return (
     <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title titleColor">Welcome to Tag Notes</h1>
        </header>
            <Router  history={history}>
                <div>
                  <Route path="/" render={(props) => <TagNote {...props} />} />
                <Route path="tagnote" render={(props) => <TagNote {...props} />} />
                </div>
                    
            </Router>
            <footer className="App-footer">
           
                    <a href="https://facebook.com/jian.liang93" target="_blank">
                        <Icon type="facebook" className="iconMargin" style={{ fontSize: 36 }}/>
                    </a>   
               
                    <a href="https://linkedin.com/in/phan-jian-liang-02405915b" target="_blank">
                      <Icon type="linkedin" className="iconMargin" style={{ fontSize: 36 }}/>
                    </a>
               
              
            </footer>
      </div>
         
    );
  }
}


export default App;
