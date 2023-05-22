import React, {useState, useEffect} from 'react';
import PostSection from './PostSection';
import { PostData } from './Apicalls';
// uncomment when ready to build
//import { fetchAllPosts } from './Apicalls';
// comment when ready to build
import { mockSomePosts } from './Mockingcalls';

function App() {
  const tagList: string[] = ["mystery", "english"];
  const [posts, setPosts] = useState<PostData[]>([]);

  // uncomment when ready to build
  /*useEffect(() => {
    setPosts(fetchAllPosts);
  }, [])*/
  // comment when ready to build
  useEffect(() => {
    setPosts(mockSomePosts);
  }, [])

  return (
    <div className="App">
      {tagList.map(tag => {
        return <PostSection posts={posts.filter(post => post.tags.includes(tag))} tag={tag} />
      })}
    </div>
  );
}

export default App;

/*Display the posts as a list of cards. With a clear paragraph body and title for each card. The tags should be displayed at the bottom of the card

It should display 5 different sections. These are based on the “tags” value you get from the API. You decide yourself which 5 tags you wanna show

The sections should be clearly separated from each other, and it should be clear which one is which

You should have a dropdown for each section. So you can show and hide the posts for each section

Everything should be in React with TypeScript!*/

