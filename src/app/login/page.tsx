import Link from "next/link";

import styles from "~/styles/login.module.css";
import  Footer  from "~/app/_components/footer_login";

export default function Home() {
  return (
    <main className={styles.main}>

      <section className={styles.section}>

        <div className={styles.div}>

          <svg xmlns="http://www.w3.org/2000/svg" width="244" height="128" viewBox="0 0 244 128" fill="none" className={styles.logo}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.686676 47.1399C17.5131 75.4722 32.619 98.9844 49.4454 127.31C84.0158 110.68 98.6697 105.062 128.767 94.624C141.93 98.4098 155.781 91.5278 161.394 86.363C186.229 82.922 215.186 78.7982 243.118 76.04C242.429 71.5715 243.806 69.8476 243.118 65.3791C214.161 44.1586 184.859 21.9106 155.896 0.690063C103.015 15.7181 53.5677 32.1186 0.686676 47.1399Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.21078 48.1743C22.3235 72.2611 37.4295 96.3412 52.5355 120.428C79.3201 106.319 111.118 85.3084 135.986 90.9194C134.778 82.6246 138.671 77.9803 143.536 72.5991C103.129 65.609 82.9836 88.8914 54.2559 100.127C53.6824 105.975 53.1089 111.829 52.5355 117.677C53.3383 112.059 53.453 106.434 54.2559 100.816C41.2077 80.5154 25.7576 55.0562 12.7026 34.7551C8.47244 36.817 8.01365 43.3542 7.21078 48.1743Z" fill="#FFFDE0" stroke="black" stroke-width="3.75"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M139.757 80.5154C150.863 59.2949 159.863 57.8009 181.655 54.7114C198.717 52.2912 210.686 52.8591 228.086 52.0614C226.595 57.1046 229.152 63.7702 231.439 70.5372C215.071 71.2268 202.138 70.1924 184.057 72.5991C172.034 71.5715 161.394 79.1363 153.494 87.0525C154.182 72.376 145.937 81.4348 139.757 80.5154Z" fill="#FFFDE0" stroke="black" stroke-width="3.75"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M89.6223 22.0255L141.134 71.9163C99.5266 66.7515 77.3162 92.0416 53.9118 100.303C40.4048 78.8523 26.041 56.0297 12.534 34.5793C29.4751 26.44 40.6612 13.0209 65.2463 11.013C74.7727 10.2356 82.1874 16.6308 89.6223 22.0255Z" fill="#FFFDE0" stroke="black" stroke-width="2.5"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M143.61 72.7681C156.395 51.115 182.781 54.272 227.863 50.8716C204.067 34.647 180.272 18.4291 156.476 2.21118C125.313 8.29542 104.35 -4.60317 87.5173 19.4837L143.61 72.7681Z" fill="#FFFDE0" stroke="black" stroke-width="2.5"/>
          </svg>

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
