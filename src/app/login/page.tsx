import Link from "next/link";

import styles from "~/styles/login.module.css";
import  Footer  from "~/app/_components/footer_login";
import { LoginGoogle } from "../_components/botão_login_google";

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
          <LoginGoogle/>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
