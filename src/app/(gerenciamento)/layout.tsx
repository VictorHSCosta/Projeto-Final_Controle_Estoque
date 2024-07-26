import "~/styles/globals.css";
import styles from "~/styles/gerenciamento.module.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <section className={styles.body}>
        <div className={styles.options}>
          <div className={styles.user}>
            <img src="/default_pfp.svg" alt="foto de perfil"/>
            <h2>Nome do Usuário</h2>
          </div>
          <div>
            <ul className={styles.nav}>
              <li><img className={styles.icon_home} src="/home_icon.svg"/><a href="/dashboard">Dashboard</a></li>
              <li><img className={styles.icon_estoque} src="estoque_icon.svg"/><a href="/estoque">Estoque</a></li>
              <li><img className={styles.icon_extrato} src="/extrato_icon.svg"/><a href="/extrato">Extrato</a></li>
              <li><img className={styles.icon_funcionarios} src="/funcionarios_icon.svg"/><a href="/funcionarios">Funcionários</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.page}>
          {children}
        </div>
      </section>
  );
}
