import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectPosts } from "../store/posts/selectors";
import { fetchPosts } from "../store/posts/thunks";
import { selectToken } from "../store/user/selectors";

const PostsPage = () => {
  //Goal: Display a list of posts on the Posts Page
  //Problem:
  //1. The data has to be managed by Redux
  //2. The data has to be fetched

  //Steps
  //1. Write a function (thunk) to fetch data
  //2. Test the function: import in the component and dispatch
  //3. Write a case in the slice/reducer to update the store
  //4. Test: check the Redux store
  //5. Write a selector and import to display the data

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const posts = useSelector(selectPosts);
  // console.log(posts);
  const token = useSelector(selectToken)

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (!token){
    navigate("/login")
  }

  return (
    <div>
      <h1>Posts Page</h1>
      {token && <input/>}
      {!posts
        ? "Loading"
        : posts.map((post) => {
            return (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
            );
          })}
    </div>
  );
};

export default PostsPage;
