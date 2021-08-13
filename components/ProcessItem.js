import React from "react";
import styles from "../styles/process.module.css";
export default function ProcessItem({ processItem }) {
    return (
        <>
            <div className={`mx-auto mb-3 ${styles.numberCircle}`}>{processItem.number}</div>
            <h5 className="fw-bold">{processItem.title}</h5>
        </>
    )
}