"use client"
import { type ChangeEvent, type FormEvent, useState } from "react"
import styles from "~/styles/search.module.css"

export function Search({funcaoPesquisa}: {funcaoPesquisa: Function}) {
    const [searchData, setSearchData] = useState("")

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchData(event.target.value)
    }

    function searchClick(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        funcaoPesquisa(searchData)
    }
    function filtroClick() {
        alert("filtrou!")
    }

    return (
        <form onSubmit={searchClick}>
            <div className={styles.search_bar}>
                <input type="search" onChange={handleChange} placeholder="Pesquisar Funcionário"></input>
                <button><img className={styles.search_icon} src="/search_icon.svg"/></button>
                <img onClick={filtroClick} className={styles.filtro_icon} src="/filtro_icon.svg" />
            </div>
        </form>
    )
}