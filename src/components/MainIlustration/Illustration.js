import React from "react";

import Jetson from '../../assests/106958439.webp'
import styles from './Illustration.module.css'

const Illustration = () => {
    return (
        <div className={styles.IllustrationContainer}>
            <img src={Jetson} className={styles.JetsonImg}></img>
        </div>
    )
}
export default Illustration