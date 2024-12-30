import axios from "axios";

export async function getPosts(makeError = false) {
  const errorText = makeError ? "invalidurl-" : "";

  try {
    const res = await axios(
      `https://${errorText}jsonplaceholder.typicode.com/posts`
    );
    const result = await res.data;
    return result;
  } catch (err) {
    throw new Error(
      `Error while fetching posts, Hint: check Posts component and remove the true value from the getPosts() function.`
    );
  }
}
