import React from "react";
import ReactDOM from "react-dom";
import styles from './Webcam.module.css'
import Card from "../../UI/Card/Card";

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onConfirm}></div>
}

const Webcam = (props) => {
    return (
        <Card className={styles.modal}>
            <div className={styles.webcam}>
                <img className={styles.webcamFeed}
                    src="http://localhost:5000/video_feed"
                    alt="Video"
                />
            </div>
        </Card>
    )
}
const WebCamContainer = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}></Backdrop>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Webcam onConfirm={props.onConfirm}></Webcam>, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default WebCamContainer