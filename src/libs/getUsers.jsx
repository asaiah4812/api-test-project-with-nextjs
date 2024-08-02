
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
  if(!response.ok){
    throw new Error('Could not retrieve users');
  }

  return await response.json()
}

export default getUsers