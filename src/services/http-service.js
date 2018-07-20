import 'whatwg-fetch';

export default class HttpService {
    getTags = () => {
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3004/tag')
              .then(response =>{
                resolve(response.json());
                  })                       
        });
        
        return promise;
    }
    
    
     searchTag = (tag) => {
     
        
          var promise = new Promise((resolve, reject) => {
           fetch('http://localhost:3004/searchTag', {
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
           fetch('http://localhost:3004/addnotes', {
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
           fetch('http://localhost:3004/deletenotes', {
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