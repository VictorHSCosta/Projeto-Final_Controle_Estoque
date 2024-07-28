import Link from "next/link";

import styles from "./index.module.css";

import styles_module from "~/styles/adicionar.module.css";

export default function Home() {

  return (
    <section>

      <h1 className={styles_module.h1}>Adicionar</h1>

      <form className={styles_module.forms}>
        <label className={styles_module.label}>Titulo</label>
        <input type="text" className={styles_module.input} />
        <label className={styles_module.label}>Quantidade</label>
        <input type="text" className={styles_module.input}/>
        <label className={styles_module.label}>Preço</label>
        <img src="public/image ico.svg" alt="" />
        <input type="number" className={styles_module.input}/>
        <label className={styles_module.label}>Descrição</label>
        <input type="text" className={styles_module.descricao}/>
        <button type="submit" className={styles_module.button}>
          <p className={styles_module.txt}>Adicionar</p>
        </button>
      </form>
    </section>
  );
}
