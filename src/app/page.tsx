import Link from "next/link";

import styles from "./index.module.css";
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerAuthSession()

  if (!session?.user.email) {
    redirect("/login")
  }
  else if (await getUserPermission()) {
      redirect("/dashboard")
    } else {
      redirect("/estoque")
  }

  async function getUserPermission() {
    const data: { id:number, nome:string, permissao:number} = await (await fetch(`http://localhost:3000/api/user?email=${session?.user.email}`)).json() 
    return data.permissao
  }
  
  return (
    <main className={styles.main}>
      <div>
        <img src="/logo.svg"/>
        <h1 className={styles.h1}>Sebinho</h1>
        <h2>Redirecionando...</h2>
      </div>
    </main>
  );
}
