import style from './page.module.css'
import Link from "next/link";

export default async function Home() {
    return (
    <div co>
      <div className={style.hero}>
        <h1>How are you</h1>
        <Link href='/users'>Users Page</Link>
        <Link href='filter/'>Filter</Link>
        <Link href='todo/'>Todos</Link>
      </div>
      
    </div>
  );
}
