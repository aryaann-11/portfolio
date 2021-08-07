import React from "react"
// import bannerImage from "../public/banner_image.jpeg"
import styles from "../styles/banner.module.css"
export default function Banner() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-around">
                    <div className="col-4">
                        <img src="banner_image.jpeg" alt="banner image"
                            className={` img-fluid ${styles.bannerimage}`} />
                    </div>
                    <div className="col-4">
                        <h1 className={styles.name}>Hi ! I am </h1>
                        <h1 className={styles.name}>Aryan</h1>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-6 text-center">
                        <p className={styles.intro}>
                            My name is Aryan Chatterjee and I am a 3rd year computer
                            engineering student at the Pune Institute Of Computer Technology.
                            I am deeply passionate about programming, especially web devlopment.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}