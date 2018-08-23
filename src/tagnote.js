import React, {Component} from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import { connect } from 'react-redux';
import { updateData } from './actions/data-action';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Card } from 'antd';
import { Tabs } from 'antd';
import { Table } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './main.css';
import '../node_modules/react-tag-input/example/reactTags.css';
import uuidv4 from 'uuid/v4';

import HttpService from './services/http-service';
const http = new HttpService();

const TabPane = Tabs.TabPane;

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];


/*const data = [{
 key: '1',
  id: 'John Brown',
  tag: 32,
 notes: 'New York No. 1 Lake Park',
}];*/

/*var data = [{
 key: '1',
  id: 'John Brown',
  tag: 32,
 notes: 'New York No. 1 Lake Park',
}];*/

var data = [];
var tag = [];

class TagNote extends Component {
    
    constructor(props) {
       super(props);         
          this.deleteButton = this.deleteButton.bind(this);
        this.state = {
            inputTag: '',
            inputNotes: '',
           tags: [],
            suggestions: [],
            data: data,
             loading: false
        };
        
        

      
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.getTag = this.getTag.bind(this);
        this.addTag = this.addTag.bind(this);
        this.searchTag = this.searchTag.bind(this);
        this.onUpdateData = this.onUpdateData.bind(this);
        this.updateInputNotes = this.updateInputNotes.bind(this);
        this.updateInputTag = this.updateInputTag.bind(this);
        this.addButton = this.addButton.bind(this);
     
        
        
      
    }
    
      componentDidMount(){        
         this.getTag();         
          
    }
    
    componentWillUnmount(){
        this.searchTag();
    }
    
    updateInputTag = (e) => {
       
        if(e.target.value !== undefined)
        {
        this.setState({inputTag: e.target.value});
            }
    }
    
     updateInputNotes = (e) => {
            
           if(e.target.value !== undefined)
      {
        this.setState({inputNotes: e.target.value});
        }
    }
     
     deleteButton = (id) => {
    
         
         http.deleteNotes(id).then(data => {                            
            console.log('Successfully Deleted!');
           this.getTag();  
              this.searchTag();
             
        }, err => {
            
        })
     }
     
     addButton = () => {
         var id = uuidv4(); //Auto generated GUID
         var tag = '';
         var notes = '';
         var arrNotes = [];
         if(this.state.inputTag !== undefined){
            tag = this.state.inputTag;
            }
          if(this.state.inputNotes !== undefined){
            notes = this.state.inputNotes;
            }
         
          var objTagNotes = JSON.stringify({  
              id: id,
                tag: tag,
                notes: notes
              });
         
       
         
          http.addTag(objTagNotes).then(data => {                            
            console.log('Successfully Added!');
           this.getTag();  
        }, err => {
            
        })
         
         
     }
    
    addTag = (data) => {
      var tempTag = JSON.stringify({                
                id: data,
                text: data
              });
        
    tag.push(JSON.parse(tempTag));    
      
        
    }
    
    getTag = () => {
      
        http.getTags().then(data => {         
           tag = [];
             for (var x = 0; x < data.length; x++){
                 this.addTag(data[x].tag);
             }
             // this.setState({tags: tag.value});
          
            //console.log(tag);
          this.setState({
              tags: tag,
              suggestions: tag
            });
        }, err => {
            
        })
    }
    
    searchTag = () => {
      
         data = [];
        http.searchTag(this.state.tags).then(searchValue => {
            var count = 0;
         
           for(var x = 0; x < searchValue.length; x++)
           {

               // for(var y = 0; y < searchValue[x].length; y++)
               // {
                    count += 1;
                    var obj = {
                        key: count,
                      id: searchValue[x].id,
                      tag: searchValue[x].tag,
                     notes: searchValue[x].notes
                    };
                   data.push(obj);
                  this.setState({data: data});
               // }             
           } 
          
           this.setState({ loading: false });
        }, err => {
            
        })
    }
    

    
    handleDelete(i) {
      
        //const { tags } = this.state;
        
        const tags = this.state.tags.filter((tag, index) => index !== i)
        this.setState({
         tags : tags
        });
        
           // re-render
        this.setState({ tags: tags });
     
    }
    
  
 
    handleAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }));
    }
 
    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();
 
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
 
        // re-render
        this.setState({ tags: newTags });
    }

enterLoading = () => {
    this.setState({ loading: true });
    this.searchTag();
  }
    
onUpdateData = () => {
    this.enterLoading();
}


    render(){
        
        const columns = [{
  title: 'ID',
  dataIndex: 'id',
  key: 'id',
}, {
  title: 'Tag',
  dataIndex: 'tag',
  key: 'tag',
}, {
  title: 'Notes',
  dataIndex: 'notes',
  key: 'notes',
},{
    title: 'Action',
    key: 'action',
    render: (text, record) => (
    <span>
    <Button type="primary" onClick={() => this.deleteButton(record.id)}>Delete</Button>
          
           
    </span>
    )
}];
            const { tags, suggestions, data } = this.state;
        return(
            <div className="container-fluid">
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Card title="Tag Note Options">
       <Tabs defaultActiveKey="1">
    <TabPane tab="Search By Tag" key="1">
           <div className="tabTitle">Search By Tag</div>
           <div>                                                
  
          
                <ReactTags tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    delimiters={delimiters} />
          
             
        </div>
        <br />
           <Button type="primary" loading={this.state.loading} onClick={this.onUpdateData}>
          Search
        </Button>
           </TabPane>
    <TabPane tab="Add" key="2"> 
        <div className="tabTitle">Add Notes</div>
        <br />
        <div>
            <Row>
            <Col span={6}></Col>
                  <Col span={12}>
                         <Input placeholder="Enter Tag" onChange={this.updateInputTag}/>
                </Col>
               
                  <Col span={6}></Col>
            </Row>
          
            <br />
             <Row>
             <Col span={6}></Col>
                  <Col span={12}>
                          <Input placeholder="Enter Notes" onChange={this.updateInputNotes}/>
                </Col>
               
                  <Col span={6}></Col>
                 
                
            </Row>
               <br />
            <Row>
            
              <Button type="primary" onClick={this.addButton}>Add Notes</Button>
            </Row>
        </div>
    </TabPane>
  
  </Tabs>
  </Card>
                    </Col>
                     <Col span={2}></Col>
                </Row>
                
                <Row>
                     <Col span={2}></Col>
                    <Col span={20}>
                          <Table columns={columns} dataSource={data} />
                        </Col>              
                     <Col span={2}></Col>
                </Row>  
                 <div className="space100"></div>
            </div>
            
         
        );     
    }
}

const mapStateToProps = (state, props) => {
    return {
         data: state.data
    }   
};

const mapActionsToProps = {
    onUpdateData: updateData
};

export default connect(mapStateToProps, mapActionsToProps)(TagNote);
    