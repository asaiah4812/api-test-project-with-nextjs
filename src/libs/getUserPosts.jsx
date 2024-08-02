
export default async function getUserPosts(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?Id=${id}`);
    if (!response.ok) throw new Error('HTTP error ' + response.status);

    return response.json()
}
