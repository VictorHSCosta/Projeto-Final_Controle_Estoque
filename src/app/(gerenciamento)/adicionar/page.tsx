import Link from "next/link";
import { AddLivro } from "~/app/_components/add_livro"; // Import the AddLivro component

import styles from "./index.module.css";

export default function Home() {

  return (
    <main>
      <AddLivro/>

      <button style={{ backgroundColor: "0xfff5d6" , margin: "10px 0 0 70px" }}>
        <p style={{color:"0x0000"}}>Retornar ao Estoque</p>//arrumar depois
      </button>
    </main>
  );
}
