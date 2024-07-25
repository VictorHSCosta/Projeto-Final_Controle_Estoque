import "~/styles/globals.css";
import styles from "~/styles/gerenciamento.module.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <section className={styles.body}>
        <div className={styles.options}>
          <div className={styles.user}>
            <img alt="foto de perfil"/>
            <h2>Nome do Usuário</h2>
          </div>
          <div>
            <ul>
              <li><img/><a href="/dashboard">Dashboard</a></li>
              <li><img/><a href="/estoque">Estoque</a></li>
              <li><img/><a href="/extrato">Extrato</a></li>
              <li><img/><a href="/funcionarios">Funcionários</a></li>
            </ul>
          </div>
        </div>
        <div>
          {children}
        </div>
      </section>
  );
}
