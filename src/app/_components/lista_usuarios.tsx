import { useEffect, useState } from "react";
import { Funcionario } from "./funcionario";


export function ListaUsuarios({pesquisa}:{pesquisa:string}) {
    const [usuarios, setUsuarios] = useState([{nome:'', email:'',telefone:'',endereco:''}])

    async function pesquisaUsuarios(pesquisa:string) {
        const data: { id:number, nome:string, email:string, telefone:string, endereco:string}[] = await (await fetch(`http://localhost:3000/api/user`)).json()
        let users:{id:number,nome:string,email:string,telefone:string,endereco:string}[] = []

        for (var usuario of data) {
            if (usuario.nome.includes(pesquisa)) {
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
            <p>Sua pesquisa: {pesquisa||"-"}</p>
            {usuarios.map((item)=><Funcionario usuario={item}/>)}
        </ul>
    )
}