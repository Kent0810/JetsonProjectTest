import React, { useState } from "react";
import Button from "../UI/Button/Button";
import styles from './Description.module.css'
import WebCamContainer from "../Webcam/templates/Webcam";


const Description = () => {
    const [trybtnState, setTryBtnState] = useState(false);
    const onConfirmHandler = () => {
        setTryBtnState(false);
    }
    const ButtonHandler = () => {
        setTryBtnState(true)
    }
    return (
        <div className={styles.description}>

            {trybtnState && <WebCamContainer onConfirm={onConfirmHandler}></WebCamContainer>}
            <h1 className={styles.title}>Object detection via <br></br>Jetson Nano</h1>
            <p>A Project that Optimizing and Deploying INT8 object detection model on embedded system</p>
            <Button className={styles.descriptionBtn} onClick={ButtonHandler}>TRY NOW</Button>
        </div>
    )
}
export default Description