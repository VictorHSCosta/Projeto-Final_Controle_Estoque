"use client" //retirar depois
import Link from "next/link";

import styles from "./funcionarios.module.css";
import { Search } from "~/app/_components/search";
import { useState } from "react";
import { ListaUsuarios } from "~/app/_components/lista_usuarios";
import { AdicionarUsuario } from "~/app/_components/adicionar_usuario";

export default function Home() {
  const [pesquisa, setPesquisa] = useState('')

  return (
    <section className={styles.funcionarios}>
      <h1>Gerenciamento de Funcionários</h1>
      <AdicionarUsuario/>
      <Search funcaoPesquisa={setPesquisa}/>
      <ListaUsuarios pesquisa={pesquisa} />
    </section>
  );
}
