import Link from "next/link";
import styles from "./index.module.css";
import { link } from "fs";
import pageStyles from "~/styles/estoque.module.css";
import {Historico }from "~/app/_components/listLivros";


export default function Home() {
  return (
    <main>
      <div className={pageStyles.div}>
        <h1 className={pageStyles.h1}>Estoque</h1>

        <Link href="/adicionar">
          <button className={pageStyles.button}><p className={pageStyles.p}>Adicionar</p></button>
        </Link>
      </div>

      <div>
        <Historico/>
      </div>
      
    </main>
  );
}
