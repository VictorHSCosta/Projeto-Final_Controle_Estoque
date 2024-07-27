import styles from "~/styles/funcionario.module.css"
export function Funcionario({usuario}:{usuario: {nome:string, email:string, telefone:string, endereco:string}}) {

    return (
        <li className={styles.funcionario}>
            <h2>{usuario.nome}</h2>
            <p>Email: {usuario.email}</p>
            <p>Telefone: {usuario.telefone}</p>
            <p>Endereço: {usuario.endereco}</p>
        </li>
    )
}