import React, {Component} from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import './main.css';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

export default class Home extends Component {
  
  
    
       render(){
           function onChange(a, b, c) {
  console.log(a, b, c);
}

           return (   
               
           <div className="w3-container">
                   <div className="welcomeDiv"><span className="welcomeFont">Welcome to JL Playground!</span></div>
               <div className="carouselDiv">
                     <Row>
                     <Col span={8}></Col>
                     <Col span={8}>                          
                         <Carousel afterChange={onChange}>
                        <div className="landscape"><img className="imgSize" src={require('./images/seongsaniichulbong.jpg')}></img></div>
                        <div className="landscape"><img className="imgSize" src={require('./images/lotte.jpg')}></img></div>
                        <div className="landscape"><img className="imgSize" src={require('./images/lakeside.jpg')}></img></div>
                        <div className="landscape"><img className="imgSize" src={require('./images/shirakawago.jpg')}></img></div>
                      </Carousel>
                   </Col>
                     <Col span={8}></Col>
                   </Row>
                </div>
                  
                   <div className="parallax">
                       <span className="w3-lobster">South Korea</span>                                                                         
                   </div>
                <div className="firstDiv">
                    <Row>
                        <Col span={6}></Col>
                         <Col span={6}><img className="imgNTower" src={require('./images/ntower.jpg')}></img></Col>
                         <Col span={6}>
                             <div className="marginTop">
                             <span className="imgDescription">Namsan Seoul Tower</span>
                             <br></br>
                             <h3>Amazing Night View =)</h3>
                             <br></br>                             
                             </div>
                             <div className="marginLeft"><img className="imgLoveLock" src={require('./images/lovelock.jpg')}></img></div>
                             <div className="marginLeft"><img className="imgLoveLock" src={require('./images/lovelock2.jpg')}></img></div>
                        
                        </Col>
                         <Col span={6}></Col>
                    </Row>
                </div>
                <div className="secondDiv">
                    <Row>
                        <Col span={6}></Col>
                         <Col span={6}><span className="imgDescription">Under Construction!<br></br>Under Construction!<br></br>Under Construction!<br></br></span></Col>
                         <Col span={6}></Col>
                         <Col span={6}></Col>
                    </Row>
                </div>
           </div>
           );
       }
}