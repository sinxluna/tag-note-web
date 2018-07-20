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
                     <Avatar size="default" src="https://s3-ap-southeast-1.amazonaws.com/tag-note/jl.jpg" style={{ height:200, width:130 }}/>
                   </div>
                   
                      <div className="marginSides">
                <Row>
                     <Col span={8}></Col>
                    <Col span={8}>
                       <Card title="Personal Detail">
                            <Row>
                                <Col span={4}> 
                                    <span className="floatRight">Name :</span>
                                 </Col>     
                                <span className="floatLeft">Phan Jian Liang</span>
                           </Row>
                 <div className="space5"></div>
                            <Row>
                                <Col span={4}> 
                                    <span className="floatRight">Nationality :</span>
                                 </Col>     
                                <span className="floatLeft">Malaysian</span>
                           </Row>
                              <div className="space5"></div>
                            <Row>
                                <Col span={4}> 
                                    <span className="floatRight">Date of birth :</span>
                                 </Col>     
                                <span className="floatLeft">3 Dec 1993</span>
                           </Row>
                                <div className="space5"></div>               
                           <Row>
                                <Col span={4}> 
                                    <span className="floatRight">Address :</span>
                                 </Col>     
                                <span className="floatLeft">647, Jalan Nenas 1</span>
                           </Row>
                            <Row>
                                <Col span={4}> 
                                    <span className="floatRight"></span>
                                 </Col>     
                                <span className="floatLeft">Taman Rahang, 70100</span>
                           </Row>
                           <Row>
                                <Col span={4}> 
                                    <span className="floatRight"></span>
                                 </Col>     
                                <span className="floatLeft">Seremban, Negeri Sembilan</span>
                           </Row>
                              <div className="space5"></div>
                              <Row>
                                <Col span={4}> 
                                    <span className="floatRight">Contact :</span>
                                 </Col>     
                                <span className="floatLeft">016-6634728</span>
                           </Row>
                            <div className="space5"></div>
                              <Row>
                                <Col span={4}> 
                                    <span className="floatRight">Email :</span>
                                 </Col>     
                                <span className="floatLeft">phanjl1993@gmail.com</span>
                           </Row>
                  </Card>
                        </Col>              
                     <Col span={8}></Col>
                </Row>   
                   </div>
            <div className="space50"></div>
                   <div className="marginSides">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Highest Qualification" bordered={true}>
          <Row>
               <Col span={4}> 
                 <span className="floatRight">Level :</span>
               </Col>     
              <span className="floatLeft">Degree</span>
           </Row>
            <div className="space5"></div>
             <Row>
               <Col span={4}> 
                 <span className="floatRight">Field Of Study :</span>
               </Col>     
              <span className="floatLeft">Information Technology</span>
           </Row>
            <div className="space5"></div>
            <Row>
               <Col span={4}> 
                 <span className="floatRight">Major :</span>
               </Col>     
              <span className="floatLeft">Software System Development</span>
           </Row>
            <div className="space5"></div>
            <Row>
               <Col span={4}> 
                 <span className="floatRight">Name Of Institution :</span>
               </Col>     
              <span className="floatLeft">Tunku Abdul Rahman University College</span>
           </Row>
            <div className="space5"></div>
            <Row>
               <Col span={4}> 
                 <span className="floatRight">Full Course Name :</span>
               </Col>     
              <span className="floatLeft">Bachelor of Information Technology (Honours) in Software System Development</span>
           </Row>
            <div className="space5"></div>
              <Row>
               <Col span={4}> 
                 <span className="floatRight">Graduate Year :</span>
               </Col>     
              <span className="floatLeft">02/2016</span>
           </Row>
            <div className="space5"></div>
            <Row>
               <Col span={4}> 
                 <span className="floatRight">CGPA :</span>
               </Col>     
              <span className="floatLeft">3.1027</span>
           </Row>
          </Card>
      </Col>
      <Col span={8}>
        <Card title="2nd Qualification" bordered={true}>
          <Row>
               <Col span={4}> 
                 <span className="floatRight">Level :</span>
               </Col>     
              <span className="floatLeft">Diploma</span>
           </Row>
            <div className="space5"></div>
             <Row>
               <Col span={4}> 
                 <span className="floatRight">Field Of Study :</span>
               </Col>     
              <span className="floatLeft">Information Technology</span>
           </Row>
            <div className="space5"></div>
             <Row>
               <Col span={4}> 
                 <span className="floatRight">Major :</span>
               </Col>     
              <span className="floatLeft">Information Systems Engineering</span>
           </Row>
            <div className="space5"></div>
            <Row>
               <Col span={4}> 
                 <span className="floatRight">Name Of Institution :</span>
               </Col>     
              <span className="floatLeft">Tunku Abdul Rahman University College</span>
           </Row>
            <div className="space5"></div>
             <Row>
               <Col span={4}> 
                 <span className="floatRight">Graduate Year :</span>
               </Col>     
              <span className="floatLeft">09/2013</span>
           </Row>
            <div className="space5"></div>
            <Row>
               <Col span={4}> 
                 <span className="floatRight">CGPA :</span>
               </Col>     
              <span className="floatLeft">2.9627</span>
           </Row>
          </Card>
      </Col>
      <Col span={8}>
        <Card title="3rd Qualification" bordered={true}>
            <Row>
               <Col span={4}> 
                 <span className="floatRight">Level :</span>
               </Col>     
              <span className="floatLeft">SPM</span>
           </Row>
              <div className="space5"></div>
              <Row>
               <Col span={4}> 
                 <span className="floatRight">Name Of Institution :</span>
               </Col>     
              <span className="floatLeft">SMK Bukit Mewah Seremban Negeri Sembilan</span>
           </Row>
              <div className="space5"></div>
             <Row>
               <Col span={4}> 
                 <span className="floatRight">Field Of Study :</span>
               </Col>     
              <span className="floatLeft">Art Stream</span>
           </Row>
              <div className="space5"></div>
             <Row>
               <Col span={4}> 
                 <span className="floatRight">Graduate Year :</span>
               </Col>     
              <span className="floatLeft">12/2010</span>
           </Row>
          </Card>
      </Col>
    </Row>
      </div>    
                     <div className="space50"></div>
                    <div className="marginSides">
                        <Card bordered={true}>
                             <Row>
                                <Col span={8}></Col>  
                                <Col span={8}> 
               <Steps direction="vertical" current={2}>
                <Step title="CTC Global Sdn Bhd" description="Internship (6 month)" />
                <Step title="Uberfusion Sdn Bhd" description="ASP.NET Application Developer (1 year 10 month)" />
                <Step title="In Progress" description="Looking for Job." />
            
              </Steps>
                                </Col>     
                                <Col span={8}></Col>  
                           </Row>
                        </Card>
                   </div>
                   
                    <div className="space50"></div>
                   <div className="marginSides">
                <Row>
                     <Col span={8}></Col>
                    <Col span={8}>
                       <Card title="Computer Skills">
                            <Row>
                                <Col span={4}> 
                                    <span className="floatRight">Programming knowledges :</span>
                                 </Col>     
                                <span className="floatLeft">Java, VB.Net, C#, HTML, CSS, Javascript, REST, ReactJS</span>
                           </Row>
                 <div className="space5"></div>
                <Row>
                                <Col span={4}> 
                                    <span className="floatRight">Databases :</span>
                                 </Col>     
                                <span className="floatLeft">MySQL, MS SQL, Postgres, MongoDB</span>
                           </Row>
                           <div className="space5"></div>
                           <Row>
                                <Col span={4}> 
                                    <span className="floatRight">Others :</span>
                                 </Col>     
                                <span className="floatLeft">AWS EC2, AWS S3, AWS SQS, RabbitMQ, Redis</span>
                           </Row>
                  </Card>
                        </Col>              
                     <Col span={8}></Col>
                </Row>   
                   </div>
                    <div className="space50"></div>
  </div> 
              
               
           );
       }
}