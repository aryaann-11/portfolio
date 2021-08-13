import React from "react"
import styles from "../styles/process.module.css"
export default function Process({ stages }) {
    stages.sort(function (a, b) { return a.stageNumber - b.stageNumber })
    return (
        <>
            <div className={`container-fluid mt-5 ${styles.bg_white}`}>
                <div className="row justify-content-center mt-5">
                    <div className="col-5 text-center">
                        <h2 className="mt-5">The Process</h2>
                    </div>
                </div>
                <div className="row mb-5 mt-5">
                    {
                        stages.map((stage) => {
                            return (
                                <>
                                    <div className="col text-center">
                                        <div className={`mx-auto mb-3 ${styles.numberCircle}`}>{stage.stageNumber}</div>
                                        <h5 className="fw-bold">{stage.title}</h5>
                                        <img src={stage.image_url} alt={stage.title} className={styles.stage_image} />
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}