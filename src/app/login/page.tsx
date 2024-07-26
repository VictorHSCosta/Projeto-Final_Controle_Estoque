import Link from "next/link";

import styles from "~/styles/login.module.css";
import  Footer  from "~/app/_components/footer_login";

export default function Home() {
  return (
    <main className={styles.main}>

      <section className={styles.section}>

        <div className={styles.div}>

          <img src="/logo.svg"/>

          <h1 className={styles.h1}>Sebinho</h1>

        </div>
        
        <div className={styles.forms}>
          <h1 className={styles.login}>Login</h1>

          <form>
            <h2 className={styles.email}>Email</h2>
            <input type="email" className={styles.input}/>
            <h2 className={styles.senha}>Senha</h2>
            <input type="password" className={styles.input} />
            <button className={styles.button}>
              <h3 className={styles.h3}>
                Entrar</h3>
              </button>
          </form>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
