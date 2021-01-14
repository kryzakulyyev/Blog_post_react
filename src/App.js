
import './App.css';
import Posts from './components/Posts'

// import {BlogPost} from './BlogPost'
// import Greeting from './Greeting'

const posts =[
  {title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body:'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'},
  {title: 'qui est esse',
  body:'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'},
  {title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
  body:'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'},
  {title: 'eum et est occaecati',
  body:'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit'},
  {title: 'nesciunt quas odio',
  body:'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque'}
]
function App() {
  return (
   <Posts blogPosts={posts}/>
 
  );
}

export default App;
