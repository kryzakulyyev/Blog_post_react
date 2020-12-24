import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BlogPost} from './BlogPost'
import reportWebVitals from './reportWebVitals';





// const blogPost = {
//   title: 'My first blog post',
//  
// }


// const element= <h1 className={isPublishedClassName}>{blogPost.title}</h1>

ReactDOM.render(
  <BlogPost/> /* element */,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* <React.S */

