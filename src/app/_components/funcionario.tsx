import styles from "~/styles/funcionario.module.css"
export function Funcionario({usuario}:{usuario: {id:number, nome:string, email:string, telefone:string, endereco:string,permissao:number}}) {
    async function removerUsuario() {
        if (confirm(`${usuario.nome} será removido permanentemente. Uma vez feita, essa ação não pode ser desfeita. Tem certeza de que deseja continiuar?`)) {
            await fetch(`http://localhost:3000/api/user?id=${usuario.id}`, {method: 'DELETE'})
            alert("Usuário removido com sucesso.")
            window.location.reload()

        } else {
            alert("Remoção cancelada.")
        }
    }
    return (
        

        <li className={styles.funcionario}>
            <h2>{usuario.nome}</h2>
            {!usuario.permissao||<h3>Administrador</h3>}
            <p>Email: {usuario.email}</p>
            <p>Telefone: {usuario.telefone}</p>
            <p>Endereço: {usuario.endereco}</p>
            <button onClick={removerUsuario}>Remover</button>
        </li>
    )
}