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
    <button onClick={publishThePost}>Unpublish</button>
    <img src="" alt=""/>
  </div>
);
 export function BlogPost (){
  return blogPost;
}

