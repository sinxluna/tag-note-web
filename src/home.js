import React, {Component} from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import './main.css';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import Particles from 'react-particles-js';
import bg from './images/background-star.jpg';

export default class Home extends Component {
  
 
    
       render(){
           function onChange(a, b, c) {
  console.log(a, b, c);
}

           return (   
               
           <div className="w3-container">
                   <Row>
                     <Col sm={0} lg={0}></Col>
                         <Col sm={24} lg={24}> 
                 <Particles className="divJL"
              params={{
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 600
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "triangle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}} 
            />
                       </Col>
                         <Col xs={0} sm={0} lg={0}></Col>
                   </Row>
                   <div className="carouselDiv">
                   
                     <Row>
                     <Col xs={0} sm={4} lg={8}></Col>
                     <Col xs={24} sm={16} lg={8}>                          
                         <Carousel afterChange={onChange}>
                        <div className="landscape"><img className="imgSize" src={require('./images/seongsaniichulbong.jpg')}></img></div>
                        <div className="landscape"><img className="imgSize" src={require('./images/lotte.jpg')}></img></div>
                        <div className="landscape"><img className="imgSize" src={require('./images/lakeside.jpg')}></img></div>
                        <div className="landscape"><img className="imgSize" src={require('./images/shirakawago.jpg')}></img></div>
                      </Carousel>
                   </Col>
                     <Col xs={0} sm={4} lg={8}></Col>
                   </Row>
                </div>
                  
                   <div className="parallax-korea">
                       <span className="w3-lobster">South Korea</span>                                                                         
                   </div>
                <div className="firstDiv">
                    <Row>
                        <Col xs={0} sm={2} md={6}></Col>
                         <Col xs={24} sm={10} md={6}><img className="imgNTower" src={require('./images/ntower.jpg')}></img></Col>
                         <Col xs={24} sm={10} md={6}>
                             <div className="marginTop">
                             <span className="imgDescription">Namsan Seoul Tower</span>
                             <br></br>
                             <h3>Amazing Night View =)</h3>
                             <br></br>                             
                             </div>
                             <div className=""><img className="imgLoveLock" src={require('./images/lovelock.jpg')}></img></div>
                             <div className=""><img className="imgLoveLock" src={require('./images/lovelock2.jpg')}></img></div>
                        
                        </Col>
                         <Col xs={0} sm={2} md={6}></Col>
                    </Row>
                </div>
                     <div className="parallax-japan">
                       <span className="w3-lobster">Japan</span>                                                                         
                   </div>
                <div className="firstDiv">
                    <Row>
                        <Col sm={2} lg={3}></Col>
                         <Col sm={10} lg={9}><span className="imgDescription">Snow Snow Snow!<br></br></span><img className="imgSize" src={require('./images/road_to_shirakawago.jpg')}></img></Col>
                         <Col sm={10} lg={9} className="japan-marginLeft"><img className="imgSize" src={require('./images/shirakawago.jpg')}></img><span className="imgDescription">Shirakawago @ 白川郷<br></br></span></Col>
                         <Col sm={2} lg={3}></Col>
                    </Row>
                </div>
           </div>
           );
       }
}