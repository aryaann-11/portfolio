import React from "react"
import styles from "../styles/skills.module.css"
export default function Skills() {
    return (
        <>
            <div className={`container-fluid mt-5 ${styles.skills_container}`}>
                <div className="row justify-content-center">
                    <div className="col-4 text-center">
                        <h1 className="mt-5">Skills</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4 d-flex justify-content-center">
                        <div className="card" style={{ width: '300px', height: '300px' }}>
                            <img src="react-logo.png" className="card-img-top"
                                alt="skilled in react" style={{ width: '300px', height: '200px' }} />
                            <div className="card-body">
                                <p className="card-text">
                                    Skilled react developer with multiple projects under my belt.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <div className="card" style={{ width: '300px', height: '300px' }}>
                            <img src="next-logo.jpg" className="card-img-top"
                                alt="skilled in next js" style={{ width: '300px', height: '200px' }} />
                            <div className="card-body">
                                <p className="card-text">
                                    Skilled react developer with multiple projects under my belt.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <div className="card" style={{ width: '300px', height: '300px' }}>
                            <img src="bootstrap-logo.png" className="card-img-top"
                                alt="skilled in bootstrap" style={{ width: '300px', height: '200px' }} />
                            <div className="card-body">
                                <p className="card-text">
                                    Skilled react developer with multiple projects under my belt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}