import 'whatwg-fetch';

export default class HttpService {
    getTags = () => {
        var promise = new Promise((resolve, reject) => {
            fetch('http://ec2-13-229-97-35.ap-southeast-1.compute.amazonaws.com:9000/tag')
              .then(response =>{
                resolve(response.json());
                  })                       
        });
        
        return promise;
    }
    
    
     searchTag = (tag) => {
     
        
          var promise = new Promise((resolve, reject) => {
           fetch('http://ec2-13-229-97-35.ap-southeast-1.compute.amazonaws.com:9000/searchTag', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                 tag: tag 
              })
            }).then(response => {              
               resolve(response.json());
            }) 
        });                               

    return promise;
    }
     
     addTag = (tag) => {
             var promise = new Promise((resolve, reject) => {
           fetch('http://ec2-13-229-97-35.ap-southeast-1.compute.amazonaws.com:9000/addnotes', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: tag                              
            }).then(response => {              
               resolve(response.json());
            }) 
        });                               

    return promise;
     }
     
     deleteNotes = (id) => {
         
           var promise = new Promise((resolve, reject) => {
           fetch('http://ec2-13-229-97-35.ap-southeast-1.compute.amazonaws.com:9000/deletenotes', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                 id: id 
              })                              
            }).then(response => {              
               resolve(response.json());
            }) 
     });
         return promise;
    }
}