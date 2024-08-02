import getUsers from '@/libs/getUsers'
import style from './page.module.css'
import Link from 'next/link';

const Users = async() => {
    const users = await getUsers()
  return (
    <div className={style.user}>
      <h1>Users</h1>
      <div className={style.list}>
        <ul>
          {users && Array.isArray(users) && users.length > 0 ? (
            users.map((user) => (
              <li key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </li>
            ))
          ) : (
            <li>No users available</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Users