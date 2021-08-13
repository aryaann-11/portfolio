import React from "react"
import styles from "../styles/process.module.css"
export default function Process() {
    return (
        <>
            <div className={`container-fluid mt-5 ${styles.bg_white}`}>
                <div className="row justify-content-center mt-5">
                    <div className="col-5 text-center">
                        <h2>The Process</h2>
                    </div>
                </div>
                <div className="row mb-5 mt-5">
                    <div className="col text-center">
                        <div className={`mx-auto mb-3 ${styles.numberCircle}`}>1</div>
                        <h5 className="fw-bold">Sign E-Contract</h5>
                    </div>
                    <div className="col text-center">
                        <div className={`mx-auto mb-3 ${styles.numberCircle}`}>2</div>
                        <h5 className="fw-bold">Pay Half</h5>
                    </div>
                    <div className="col text-center">
                        <div className={`mx-auto mb-3 ${styles.numberCircle}`}>3</div>
                        <h5 className="fw-bold">Approve The Prototype</h5>
                    </div>
                    <div className="col text-center">
                        <div className={`mx-auto mb-3 ${styles.numberCircle}`}>4</div>
                        <h5 className="fw-bold">Wait Till I Complete the Project</h5>
                    </div>
                    <div className="col text-center">
                        <div className={`mx-auto mb-3 ${styles.numberCircle}`}>5</div>
                        <h5 className="fw-bold">Receive Website</h5>
                    </div>
                    <div className="col text-center">
                        <div className={`mx-auto mb-3 ${styles.numberCircle}`}>6</div>
                        <h5 className="fw-bold">Pay The Other Half</h5>
                    </div>
                </div>
            </div>
        </>
    )
}