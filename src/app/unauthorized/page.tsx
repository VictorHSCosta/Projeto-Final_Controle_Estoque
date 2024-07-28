"use client"
import { useSearchParams } from "next/navigation"
import styles from "./unauthorized.module.css"

export default function() {
    const param = useSearchParams().get("u")
    let auth:string
    switch (param) {
        case "0":
            auth = "Usuário não cadastrado. Login não autorizado."
            break;
        case "1":
            auth = "Usuário não autenticado. Login necessário."
            break;
        case "2":
            auth = "Permissão de Administrador necessária."
            break;
        default:
            auth = ""
            break;
    }
    return (
        <main className={styles.page}>
            <div className={styles.unauthorized}>
                <h1>Acesso Negado</h1>
                <h2 className={styles.texts}>Erro de Autorização: {auth}</h2>
                <h3 className={styles.texts}>Parece que você não tem autorização para acessar essa página/função.<br/>Os motivos podem incluir:</h3>
                <p className={styles.texts}>
                    -Você não está cadastrado no sistema. Tente logar com um email cadastrado ou entre em contato com um administrador.<br/>
                    -Você não está logado. Faça login para acessar o sistema.<br/>
                    -Você não é administrador e não possui permissão para acessar a página/função.
                </p>
                <a href="/login">Login</a>
                <a href="/">Página Inicial</a>
            </div>     
        </main>
    )
}