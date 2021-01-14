

function Posts(props){

  return  <div>
  <h1 className="text-center">Welcome to my Blog</h1>
  {/* <BlogPost isAdmin={false}/>
  <Greeting myName='Kasim' isAdmin={false}/> */}
  <section>
    {props.blogPosts.map((post)=>{
    return (<article>
       <h2>{post.title}</h2>
       <p>{post.body}</p>
     </article>)
    })}
   
</section>
</div>
}
export default Posts;