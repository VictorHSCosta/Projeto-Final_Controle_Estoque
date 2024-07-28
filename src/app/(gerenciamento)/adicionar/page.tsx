import Link from "next/link";
import { AddLivro } from "~/app/_components/add_livro"; // Import the AddLivro component

import styles from "./index.module.css";

export default function Home() {

  return (
    <main>
      <AddLivro/>
    </main>
  );
}
