import axios from "axios";
import { postsFetched, detailsFetched } from "./slice";

const apiUrl = "https://codaisseur-coders-network.herokuapp.com";

export const fetchPosts = () => async (dispatch, getState) => {
  const response = await axios.get(`${apiUrl}/posts`);
  // console.log("response posts", response.data.rows);
  //update the store
  dispatch(postsFetched(response.data.rows));
};

export const fetchDetails = (id) => async (dispatch, getState) => {
  const response = await axios.get(`${apiUrl}/posts/${id}`);
  // console.log("details post", response);
  dispatch(detailsFetched(response.data));
};
