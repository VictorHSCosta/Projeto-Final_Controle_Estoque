import Link from "next/link";

import styles from "./index.module.css";

export default function Home() {
  return (
    <main>se estiver logado, mandar para /dashboard, se não, mandar para /login</main>
  );
}
