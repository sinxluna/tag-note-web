import React, {Component} from 'react';
import { Avatar } from 'antd';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Steps } from 'antd';
import './main.css';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

export default class Biodata extends Component {
  
    
       render(){
           const Step = Steps.Step;
           return (
         
         
                  <div>
                   <div className="marginAvatar">
                     <Avatar size="default" src="https://d18pfoii5xhgav.cloudfront.net/jl.jpg" style={{ height:200, width:130 }}/>
                   </div>
                   
                      <div className="marginSides">
                <Row>
                     <Col sm={0} lg={8}></Col>
                    <Col sm={24} lg={8}>
                       <Card title="Personal Detail">
                            <Row>
                                <Col sm={6} lg={4}> 
                                    <span className="floatRight">Name :</span>
                                 </Col> 
                                 <Col sm={18} lg={20}> 
                                <span className="floatLeft">Phan Jian Liang</span>  
                                      </Col> 
                           </Row>
                 <div className="space5"></div>
                            <Row>
                                <Col sm={6} lg={4}> 
                                    <span className="floatRight">Nationality :</span>
                                 </Col>     
                                 <Col sm={18} lg={20}> 
                                <span className="floatLeft">Malaysian</span>
                                                                           </Col> 
                           </Row>
                              <div className="space5"></div>
                            <Row>
                                 <Col sm={6} lg={4}> 
                                    <span className="floatRight">Date of birth :</span>
                                 </Col>     
                                 <Col sm={18} lg={20}> 
                                <span className="floatLeft">3 Dec 1993</span>
                                      </Col>   
                           </Row>
                                <div className="space5"></div>               
                           <Row>
                               <Col sm={6} lg={4}> 
                                    <span className="floatRight">Address :</span>
                                 </Col>     
                                <Col sm={18} lg={20}> 
                                <span className="floatLeft">647, Jalan Nenas 1</span>
                                     </Col>
                           </Row>
                            <Row>
                                <Col sm={6} lg={4}> 
                                    <span className="floatRight"></span>
                                 </Col>     
                            <Col sm={18} lg={20}> 
                                <span className="floatLeft">Taman Rahang, 70100</span>
                                  </Col> 
                           </Row>
                           <Row>
                                <Col sm={6} lg={4}> 
                                    <span className="floatRight"></span>
                                 </Col>     
                                 <Col sm={18} lg={20}> 
                                <span className="floatLeft">Seremban, Negeri Sembilan</span>
                                      </Col>   
                           </Row>
                              <div className="space5"></div>
                              <Row>
                                 <Col sm={6} lg={4}> 
                                    <span className="floatRight">Contact :</span>
                                 </Col>     
                                    <Col sm={18} lg={20}> 
                                <span className="floatLeft">016-6634728</span>
                                          </Col>  
                           </Row>
                            <div className="space5"></div>
                              <Row>
                                 <Col sm={6} lg={4}> 
                                    <span className="floatRight">Email :</span>
                                 </Col>   
                                      <Col sm={18} lg={20}> 
                                <span className="floatLeft">phanjl1993@gmail.com</span>
                                            </Col> 
                           </Row>
                  </Card>
                        </Col>              
                     <Col sm={0} lg={8}></Col>
                </Row>   
                   </div>
            <div className="space50"></div>
                   <div className="marginSides">
    <Row gutter={16}>
      <Col sm={24} lg={8}>
        <Card title="Highest Qualification" bordered={true}>
          <Row>
                <Col sm={6} lg={4}> 
                 <span className="floatRight">Level :</span>
               </Col>    
              <Col sm={18} lg={20}> 
              <span className="floatLeft">Degree</span>
                   </Col> 
           </Row>
            <div className="space5"></div>
             <Row>
                <Col sm={6} lg={4}> 
                 <span className="floatRight">Field Of Study :</span>
               </Col>     
                  <Col sm={18} lg={20}> 
              <span className="floatLeft">Information Technology</span>
                      </Col>
           </Row>
            <div className="space5"></div>
            <Row>
               <Col sm={6} lg={4}> 
                 <span className="floatRight">Major :</span>
               </Col>     
                 <Col sm={18} lg={20}> 
              <span className="floatLeft">Software System Development</span>
                       </Col>
           </Row>
            <div className="space5"></div>
            <Row>
               <Col sm={6} lg={4}> 
                 <span className="floatRight">Name Of Institution :</span>
               </Col>     
                  <Col sm={18} lg={20}> 
              <span className="floatLeft">Tunku Abdul Rahman University College</span></Col>
           </Row>
            <div className="space5"></div>
            <Row>
                <Col sm={6} lg={4}> 
                 <span className="floatRight">Full Course Name :</span>
               </Col>   
                  <Col sm={18} lg={20}> 
              <span className="floatLeft">Bachelor of Information Technology (Honours) in Software System Development</span></Col>
           </Row>
            <div className="space5"></div>
              <Row>
              <Col sm={6} lg={4}> 
                 <span className="floatRight">Graduate Year :</span>
               </Col>     
                    <Col sm={18} lg={20}> 
              <span className="floatLeft">02/2016</span></Col>
           </Row>
            <div className="space5"></div>
            <Row>
               <Col sm={6} lg={4}> 
                 <span className="floatRight">CGPA :</span>
               </Col>    
                  <Col sm={18} lg={20}> 
              <span className="floatLeft">3.1027</span></Col>
           </Row>
          </Card>
      </Col>
      <Col sm={24} lg={8}>
        <Card title="2nd Qualification" bordered={true}>
          <Row>
               <Col sm={6} lg={4}> 
                 <span className="floatRight">Level :</span>
               </Col>     
                <Col sm={18} lg={20}> 
              <span className="floatLeft">Diploma</span></Col>
           </Row>
            <div className="space5"></div>
             <Row>
               <Col sm={6} lg={4}> 
                 <span className="floatRight">Field Of Study :</span>
               </Col>     
                   <Col sm={18} lg={20}> 
              <span className="floatLeft">Information Technology</span></Col>
           </Row>
            <div className="space5"></div>
             <Row>
              <Col sm={6} lg={4}> 
                 <span className="floatRight">Major :</span>
               </Col>     
                   <Col sm={18} lg={20}> 
              <span className="floatLeft">Information Systems Engineering</span></Col>
           </Row>
            <div className="space5"></div>
            <Row>
                <Col sm={6} lg={4}> 
                 <span className="floatRight">Name Of Institution :</span>
               </Col>     
                  <Col sm={18} lg={20}> 
              <span className="floatLeft">Tunku Abdul Rahman University College</span></Col>
           </Row>
            <div className="space5"></div>
             <Row>
               <Col sm={6} lg={4}> 
                 <span className="floatRight">Graduate Year :</span>
               </Col>     
                   <Col sm={18} lg={20}> 
              <span className="floatLeft">09/2013</span></Col>
           </Row>
            <div className="space5"></div>
            <Row>
               <Col sm={6} lg={4}> 
                 <span className="floatRight">CGPA :</span>
               </Col>   
                  <Col sm={18} lg={20}> 
              <span className="floatLeft">2.9627</span></Col>
           </Row>
          </Card>
      </Col>
      <Col sm={24} lg={8}>
        <Card title="3rd Qualification" bordered={true}>
            <Row>
                 <Col sm={6} lg={4}> 
                 <span className="floatRight">Level :</span>
               </Col>     
                  <Col sm={18} lg={20}> 
              <span className="floatLeft">SPM</span>  </Col>    
           </Row>
              <div className="space5"></div>
              <Row>
                 <Col sm={6} lg={4}> 
                 <span className="floatRight">Name Of Institution :</span>
               </Col>     
                    <Col sm={18} lg={20}> 
              <span className="floatLeft">SMK Bukit Mewah Seremban Negeri Sembilan</span>  </Col>    
           </Row>
              <div className="space5"></div>
             <Row>
                <Col sm={6} lg={4}> 
                 <span className="floatRight">Field Of Study :</span>
               </Col>     
                   <Col sm={18} lg={20}> 
              <span className="floatLeft">Art Stream</span>  </Col>    
           </Row>
              <div className="space5"></div>
             <Row>
                 <Col sm={6} lg={4}> 
                 <span className="floatRight">Graduate Year :</span>
               </Col>     
                   <Col sm={18} lg={20}> 
              <span className="floatLeft">12/2010</span>  </Col>    
           </Row>
          </Card>
      </Col>
    </Row>
      </div>    
                     <div className="space50"></div>
                    <div className="marginSides">
                        <Card bordered={true}>
                             <Row>
                                <Col sm={0} lg={8}></Col>  
                                <Col sm={24} lg={8}> 
               <Steps direction="vertical" current={2}>
                <Step title="CTC Global Sdn Bhd" description="Internship (6 month)" />
                <Step title="Uberfusion Sdn Bhd" description="ASP.NET Application Developer (1 year 10 month)" />
                <Step title="In Progress" description="Looking for Job." />
            
              </Steps>
                                </Col>     
                                <Col sm={0} lg={8}></Col>  
                           </Row>
                        </Card>
                   </div>
                   
                    <div className="space50"></div>
                   <div className="marginSides">
                <Row>
                     <Col sm={0} lg={8}></Col>
                    <Col sm={24} lg={8}>
                       <Card title="Computer Skills">
                            <Row>
                                <Col sm={6} lg={4}> 
                                    <span className="floatRight">Programming knowledges :</span>
                                 </Col>     
                                   <Col sm={18} lg={20}> 
                                <span className="floatLeft">C#, VB.NET, Java HTML, CSS, Javascript, REST, ReactJS, NodeJS</span>
                                        </Col>
                           </Row>
                 <div className="space5"></div>
                <Row>
                                 <Col sm={6} lg={4}>  
                                    <span className="floatRight">Databases :</span>
                                 </Col>  
                       <Col sm={18} lg={20}> 
                                <span className="floatLeft">MySQL, MS SQL, Postgres, MongoDB</span>
                            </Col>
                           </Row>
                           <div className="space5"></div>
                           <Row>
                                 <Col sm={6} lg={4}> 
                                    <span className="floatRight">Others :</span>
                                 </Col>  
                                  <Col sm={18} lg={20}> 
                                <span className="floatLeft">AWS EC2, AWS S3, AWS SQS, RabbitMQ, Redis</span>
                                       </Col>
                           </Row>
                  </Card>
                        </Col>              
                     <Col sm={0} lg={8}></Col>
                </Row>   
                   </div>
                    <div className="space100"></div>
  </div> 
              
               
           );
       }
}