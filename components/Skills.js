import React from "react"
import styles from "../styles/skills.module.css"
export default function Skills({ skills }) {
    return (
        <>
            <div className={`container-fluid mt-5 ${styles.skills_container}`}>
                <div className="row justify-content-center">
                    <div className="col-4 text-center">
                        <h1 className="mt-5">Skills</h1>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    {
                        skills.map((skill) => {
                            return (
                                <>
                                    <div className="col-4 mb-5 d-flex justify-content-center">
                                        <div className={`card ${styles.skill_card}`} style={{ width: '310px', height: '350px' }}>
                                            <img src={skill.image_url} className="card-img-top"
                                                alt={skill.title} style={{ width: '310px', height: '200px' }} />
                                            <div className="card-body">
                                                <p className="card-text">
                                                    {skill.description}
                                                </p>
                                            </div>
                                        </div>
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