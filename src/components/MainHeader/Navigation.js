import React from "react";
import styles from './Navigation.module.css'
import Button from "../UI/Button/Button";
const Navigation = () => {
    return (
        <React.Fragment>
            <nav className={styles["nav"]}>
                <ul>
                    <li><a href="/#">Settings</a></li>
                    <li><a href="/#">User</a></li>
                    <li><Button className={styles["btn"]}>Log In</Button></li>
                </ul>
            </nav>
        </React.Fragment>
    )
}
//we need to put Button inside a li tag because in css we have margin left on the li tag

export default Navigation;