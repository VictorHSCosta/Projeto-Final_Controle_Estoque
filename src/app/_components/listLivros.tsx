import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export async function Historico() {
    
    const response = await fetch('http://localhost:3000/api/livros',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    
    const data = await response.json();

    console.log(data);

    return (
        <ul>
            {data.map((itens: { id: Key | null | undefined; titulo: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; quantidade: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; preco: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; descricao: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
                <li key={itens.id}>
                     <p>{itens.titulo}</p>
                    <p>{itens.quantidade}</p>
                     <p>{itens.preco}</p>
                    <p>{itens.descricao}</p>
                </li>
            ))}
        </ul>
    );
}

