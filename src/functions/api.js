import axios from "axios";

export async function getPosts() {
  try {
    const res = await axios("https://jsonplaceholder.typicode.com/posts");
    const result = await res.data;
    return result;
  } catch (err) {
    Error(`Error while fetching posts: ${err}`)
  }
}
