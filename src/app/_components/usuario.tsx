"use client"
import { signOut, useSession } from "next-auth/react";
import styles from "~/styles/gerenciamento.module.css";

export function Usuario() {
    const session = useSession()

    async function Sair() {
        await signOut()
        location.href="/login"
    }

    return(
        <div className={styles.user}>
            <img src={session.data?.user.image ?? "/default_pfp.svg"} alt="foto de perfil"/>
            <h2>{session.data?.user.name ?? "Sem Usuario"}</h2>
            <button onClick={()=>Sair()}>LogOut</button>
        </div>
    )
}