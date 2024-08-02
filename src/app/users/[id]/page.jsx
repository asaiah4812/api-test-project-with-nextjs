import UserPosts from "@/components/userPost/UserPosts";
import getUser from "@/libs/getUser";
import getUserPosts from "@/libs/getUserPosts";
import { Suspense } from "react";
import style from './page.module.css'


export default async function UserPage({params: {id}}) {
    const userData = getUser(id)
    const userPosts = getUserPosts(id)

    const user = await userData

  return (
    <div className={style.main}>
        <h1>User Information</h1>    
        <p>{user?.name}</p>
        <Suspense fallback={<p>Loading...</p>}>
        <UserPosts promise={userPosts} />
        </Suspense>
    </div>
  )
}
