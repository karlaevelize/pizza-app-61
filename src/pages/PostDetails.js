import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../store/posts/thunks";

const PostDetails = () => {
  const { id } = useParams();
  // console.log("id", id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, []);

  return (
    <div>
      <h1>Details Page</h1>
    </div>
  );
};

export default PostDetails;
