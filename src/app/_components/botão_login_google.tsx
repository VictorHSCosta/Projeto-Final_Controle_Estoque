"use client"
import { signIn } from "next-auth/react";
import styles from "~/styles/login.module.css";

export function LoginGoogle() {
    return (
        <button className={styles.loginGoogle} onClick={()=>signIn("google")} >Entrar com Google<img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"/></button>
    )
}