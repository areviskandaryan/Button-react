import React from 'react';
import ReactDOM from "react-dom";
import styles from "./Button.module.css";


export default function Button({text, disabled, onHandleClick}) {
    return (
        <>
            <button className={styles.button} disabled={disabled} onClick={onHandleClick}>{text}</button>
        </>
    )
}