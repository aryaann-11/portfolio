import React from "react"
import styles from "../styles/case.module.css"
export default function Case() {
    return (
        <>
            <div className="container fluid mt-5">
                <div className="row justify-content-around">
                    <div className="col-5">
                        <h2 className={styles.text_light_blue}>Why do business with me ?</h2>
                        <div className={styles.text_light_blue}>
                            <p>Here's what you need to know about me : </p>
                            <ul>
                                <li>I speak clear and concrete</li>
                                <li>I do not beat around the bush</li>
                                <li>I am one the most skilled web developers in my price range</li>
                                <li>I am your best bet to get your website up and running quickly</li>
                            </ul>
                            <p>
                                You deserve a website. Whether it's for your business, your portfolio,
                                whatever.
                            </p>
                            <p>
                                When you choose me, business day is every single day of the week.
                                Your website will be up and running in
                                no time and for a fraction of what the others will charge you.
                            </p>
                        </div>
                    </div>
                    <div className={`col-5 ${styles.text_light_blue}`}>
                        <h2>Pricing</h2>
                        <ul>
                            <li>Portfolio website (such as this one)    : INR 10,000</li>
                            <li>Website to showcase your small business : INR 20,000</li>
                            <li>E-commerce website                      : INR 40,000</li>
                            <li>Anything bigger                         : Price is negotiable</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}