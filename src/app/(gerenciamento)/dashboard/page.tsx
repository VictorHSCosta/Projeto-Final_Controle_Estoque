import Link from "next/link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.dashboardSection}>Dashboard</section>
      <div className={styles.dashboard}>
        <h1>Atividades Recentes
          <p>1°Harry Potter</p>
          <p>2° O poder do Hábito</p>
          <p>3° Diário de um Banana</p>
        </h1>
        <h1>
          Melhores Vendas
        </h1>
        <p>1°Harry Potter</p>
        <p>2° O poder do Hábito</p>
        <p>3° Diário de um Banana</p>

        <h1>Estoque</h1>
        <p>Total de livros:220</p>

      </div>
    </>
  );
}
