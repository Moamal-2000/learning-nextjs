export async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await res.json();
    return result;
  } catch (err) {
    throw new Error(`Error while fetching posts: ${err}`)
  }
}
