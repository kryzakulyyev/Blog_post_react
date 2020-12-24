import React from 'react'


//Stateless functional components
 export class BlogPost extends React.Component{
   render(){
    const myBlogPost = {
      title: 'My first blog',
      body: 'lorem ipsum',
      published:true
    }
    let classProperties;
    
    if(myBlogPost.published){
      classProperties = 'green'
    }else{
      classProperties = 'red'
    }
    
    const fontClass = 'font-times'
    
    function publishThePost(e){
     if(e.target.innerText === 'Publish'){
      e.target.innerText = 'Unpublish';
      document.getElementById('title').style.color = 'green'
     }else{
      e.target.innerText = 'Publish';
      document.getElementById('title').style.color = 'red'
     }
    }
    
    const blogPost = (
      <div>
        <h1 id='title' className={`${classProperties} ${fontClass}`/* classProperties + ' '+ fontClass */}>{myBlogPost.title}</h1> 
        <p>{myBlogPost.body}</p> 
        {this.props.isAdmin ? <button onClick={publishThePost}>Unpublish</button>:<button>Read More</button>}
        <img src="" alt=""/>
      </div>
    );
  return blogPost;
   }
}

//Default export     
/* export default BlogPost */
/* import BlogPost from './BlogPost.js'  */

//Multiple export    Should be same name
/* export {BlogPost} */
/* import {BlogPost} from  './BlogPost.js' */