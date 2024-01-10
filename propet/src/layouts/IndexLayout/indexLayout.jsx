import React from "react";
import Header from "@/src/components/Header/header";
import Footer from "@/src/components/Footer/footer";
import styles from "./indexLayout.module.css"

export default function IndexLayout({children}) {
    return (
        <div classname={styles.container}>
            <div className={styles.header}>
                <Header/>
            </div>
            <div className={styles.cover}>
                {children}
            </div>
            <div className={styles.footer}>
                <Footer/>
            </div>
        </div>
    )
}