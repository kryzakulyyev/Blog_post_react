import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const classProperties = 'blue';
const myBlogPost = {
  title: 'My first blog',
  body: 'lorem ipsum',
 
}

const blogPost = (
  <div>
    <h1 id='title' className={classProperties}>{myBlogPost.title}</h1> 
    <p></p> 
    <p></p>
    <img src="" alt=""/>
  </div>
);

// const blogPost = {
//   title: 'My first blog post',
//   published:true
// }
// let isPublishedClassName;

// if(blogPost.published){
//   isPublishedClassName = 'green'
// }else{
//   isPublishedClassName = 'red'
// }

// const element= <h1 className={isPublishedClassName}>{blogPost.title}</h1>

ReactDOM.render(
  blogPost /* element */,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* <React.S */

