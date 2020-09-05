import React from 'react';
import ReactDOM from "react-dom";
import styles from "./Inputs.module.css";


export default function Inputs({valueMin, valueMax, valueStep, onhandleInputChangesStep, onhandleInputChangesMinValue, onhandleInputChangesMaxValue}) {
    return (
        <>
            <label>
                minValue
                <input value={valueMin} onChange={onhandleInputChangesMinValue} className={styles.input}/>
            </label>
            <label>
                maxValue
                <input value={valueMax} onChange={onhandleInputChangesMaxValue} className={styles.input}/>
            </label>
            <label>
                step
                <input value={valueStep} onChange={onhandleInputChangesStep} className={styles.input}/>
            </label>
        </>


    )
}