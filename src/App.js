import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  
} from "react-router-dom";
import Posts from './components/Posts'
import CreatePost from './components/CreatePost'
import React from 'react'
import PostDetails from './components/PostDetails';
import BlogPostService from './services/posts.service';

class App extends React.Component{ 
  constructor(props){
    super(props);
    this.state ={
      posts : [],
      title : '',
      body : ''
    }
    this.setFields = this.setFields.bind(this)
    this.storeBlogPost = this.storeBlogPost.bind(this)
  }
// Store input value in the state
  setFields (key, value) {
  this.setState({
    [key]: value
  })
  }
  
  storeBlogPost() {
    const newPost = {
      id : Date.now(),
      title : this.state.title,
      body : this.state.body
    }
    const newArray = [...this.state.posts, newPost]
    this.setState({
      posts: newArray,
      title: '',
      body: ''
    })
  }
  componentDidMount(){
    BlogPostService.getAll().then((res) => this.setState({
    posts: res.data
  }))
  }
  render(){
    return (
      <div>
      <h1 className='text-center'>Welcome to my Blog</h1>
   
      <BrowserRouter>
       <div>
          <nav>
           <ul>
             <li>
                <Link to="/">Home</Link>
             </li>
             <li>
               <Link to="/create-post">Create Post</Link>
             </li>
           </ul>
         </nav>
  
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         <Switch>
           <Route exact path="/">
              <Posts blogPosts={this.state.posts}/>
           </Route>
           <Route exact path="/create-post">
             <CreatePost setFields={this.setFields} storeBlogPost={this.storeBlogPost} title={this.state.title} body={this.state.body}/>
           </Route>
           <Route path="/posts/:id">
             <PostDetails/>
           </Route>
         </Switch>
       </div>
     </BrowserRouter>
   </div>
    );

  }

  // componentDidUpdate(){
  //   console.log(this.state.title, this.state.body)
  // }
  
}

export default App;
