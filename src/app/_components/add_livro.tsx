// import styles_module from "~/styles/adicionar.module.css";

// export function AddLivro() {

//     async function handleCreateLivro(form: FormData) {
//         "use server"

//         const titulo = form.get('titulo');
//         const quantidade = form.get('quantidade');
//         const preco = form.get('preco');
//         const descricao = form.get('descricao');


//         if(!titulo){
//             return alert('Preencha o campo titulo');
//         }
//         if(!quantidade){
//             return alert('Preencha o campo quantidade');
//         }
//         if(!preco){
//             return alert('Preencha o campo preço');
//         }
//         if(!descricao){
//             return alert('Preencha o campo descrição');
//         }


//         await fetch('http://localhost:3000/api/livros', {
//             method: 'POST',
//             body: JSON.stringify({
//                 titulo,
//                 quantidade,
//                 preco,
//                 descricao
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//     }
//     return(
//     <section>

//       <h1 className={styles_module.h1}>Adicionar</h1>

//       <form action={handleCreateLivro}className={styles_module.forms}>
//         <label className={styles_module.label}>Titulo</label>
//         <input type="text" className={styles_module.input} />
//         <label className={styles_module.label}>Quantidade</label>
//         <input type="number" className={styles_module.input}/>
//         <label className={styles_module.label}>Preço</label>
//         <img src="public/image ico.svg" alt="" />
//         <input type="number" className={styles_module.input}/>
//         <label className={styles_module.label}>Descrição</label>
//         <input type="text" className={styles_module.descricao}/>
//         <button type="submit" className={styles_module.button}>
//           <p className={styles_module.txt}>Adicionar</p>
//         </button>
//       </form>
//     </section>
//     )
// }

"use client"


import { useState } from 'react';
import styles_module from "~/styles/adicionar.module.css";

export function AddLivro() {
    const [titulo, setTitulo] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');

    async function handleCreateLivro(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        if (!titulo) {
            return alert('Preencha o campo titulo');
        }
        if (!quantidade) {
            return alert('Preencha o campo quantidade');
        }
        if (!preco) {
            return alert('Preencha o campo preço');
        }
        if (!descricao) {
            return alert('Preencha o campo descrição');
        }

        const quantidadeInt = parseInt(quantidade, 10);
        const precoFloat = parseFloat(preco);

        await fetch('http://localhost:3000/api/livros', {
            method: 'POST',
            body: JSON.stringify({
                titulo,
                quantidade: quantidadeInt,
                preco: precoFloat,
                descricao
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const response = await fetch('http://localhost:3000/api/livros');

        const data = await response.json();

        const id = data[data.length - 1].id;

        await fetch(`http://localhost:3000/api/entrada`, {
            method: 'POST',
            body: JSON.stringify({
                idUsuario:1,
                idLivro: id,
                quantidade: quantidadeInt
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // Limpe os campos do formulário
        setTitulo('');
        setQuantidade('');
        setPreco('');
        setDescricao('');

        alert('Livro adicionado');
    }

    return (

        <section>
            <h1 className={styles_module.h1}>Cadastrar Livro</h1>
            <form onSubmit={handleCreateLivro} className={styles_module.forms}>
                <label className={styles_module.label}>Titulo</label>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    className={styles_module.input}
                />
                <label className={styles_module.label}>Quantidade</label>
                <input
                    type="string"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    className={styles_module.input}
                />
                <label className={styles_module.label}>Preço</label>
                <input
                    type="string"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    className={styles_module.input}
                />
                <label className={styles_module.label}>Descrição</label>
                <input
                    type="text"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    className={styles_module.descricao}
                />
                <button type="submit" className={styles_module.button}>
                    <p className={styles_module.txt}>Adicionar</p>
                </button>
            </form>
        </section>
    );
}
