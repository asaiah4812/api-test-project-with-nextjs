import React from 'react'
import style from './userPosts.module.css'

const UserPosts = async({promise}) => {
    const posts = await promise
  return (
    <div className={style.post}>
        <ul>
            {posts.map(post =>(
                <li key={post.id} className={style.listItem}>
                    <h2>{post.title}</h2><br/>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default UserPosts