"use client"
import { useState } from "react"
import { MenuAddUsuario } from "./menu_add_usuario"
import styles from "~/styles/addusuario.module.css"

export function AdicionarUsuario() {
    const [flag, setFlag] = useState(true)
    function HandleClick() {
        setFlag(!flag)
    }

    return (
        <div>
            <button className={styles.botaoAddUsuario} onClick={HandleClick}><img src="/mais_icon.svg"/>Adicionar Usuário</button>
            {flag||<MenuAddUsuario/>}
        </div>
    )
}