

function Posts(props){

  return (
     <section>
     {props.blogPosts.map((post)=>{
      return (
       <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
       </article>)
    })}
   
</section>
  )

}
export default Posts;