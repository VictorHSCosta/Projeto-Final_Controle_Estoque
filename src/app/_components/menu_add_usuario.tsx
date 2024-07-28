import { type FormEvent, useState, type ChangeEvent, useEffect } from "react"
import styles from "~/styles/addusuario.module.css"

export function MenuAddUsuario() {
    const [formData, setFormData] = useState({
        nome:'',
        email:'',
        telefone:'',
        endereco:'',
        permissao: 0,
    })
    const [perm, setPerm] = useState(true)
    function HandleChange(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.name == "permissao") {
            setPerm(!perm)
            setFormData({...formData, permissao: Number(perm)})
        } else {
            setFormData({...formData, [event.target.name]: event.target.value})
        }
        
    }


    async function HandleSubmit(event: FormEvent) {
        await fetch("http://localhost:3000/api/user", {
            method: "POST",
            body: `{"nome":"${formData.nome}","email":"${formData.email}","telefone":"${formData.telefone}","endereco":"${formData.endereco}","permissao":${formData.permissao}}`
        })
        alert("Usuário criado com sucesso.")
    }

    return (
        <form onSubmit={HandleSubmit} className={styles.menuAddUsuario}>
            <input name="nome" onChange={HandleChange} type="text" placeholder="Nome"/>
            <input name="email" onChange={HandleChange} type="email" placeholder="Email"/>
            <input name="telefone" onChange={HandleChange} type="text" placeholder="Telefone"/>
            <input name="endereco" onChange={HandleChange} type="text" placeholder="Endereço"/>
            <p><input name="permissao" onChange={HandleChange} type="checkbox"/>Admnistrador</p>
            <button>Criar Usuário <img src="/confirm_icon.svg"/></button>
        </form>
    )
}