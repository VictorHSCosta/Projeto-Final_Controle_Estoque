import { useEffect, useState } from "react";
import { Funcionario } from "./funcionario";


export function ListaUsuarios({pesquisa}:{pesquisa:string}) {
    const [usuarios, setUsuarios] = useState([{id:NaN, nome:'', email:'',telefone:'',endereco:'',permissao:0}])

    async function pesquisaUsuarios(pesquisa:string) {
        const data: { id:number, nome:string, email:string, telefone:string, endereco:string,permissao:number}[] = await (await fetch(`http://localhost:3000/api/user`)).json()
        let users:{id:number,nome:string,email:string,telefone:string,endereco:string,permissao:number}[] = []

        for (var usuario of data) {
            if (usuario.nome.toLowerCase().includes(pesquisa)) {
                users.push(usuario)
            }
        }

        setUsuarios(users)
    }

    useEffect(()=>{
        pesquisaUsuarios(pesquisa)
    }, [pesquisa])

    return (
        <ul>
            <p key="pesq">Sua pesquisa: {pesquisa||"-"}</p>
            {usuarios.map((item)=><Funcionario key={item.id} usuario={item}/>)}
        </ul>
    )
}