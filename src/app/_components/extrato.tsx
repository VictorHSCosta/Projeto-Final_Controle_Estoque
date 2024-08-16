export async function Historico() {
    
    const response = await fetch('http://localhost:3000/api/entrada');
    const data : {
        map(arg0: (itens: any) => import("react").JSX.Element): import("react").ReactNode;id:number,titulo:string,quantidade:number,preco:number,descricao:string
} = await response.json();

    console.log(data);

    return (
        <ul>
            {data.map((itens) => (
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