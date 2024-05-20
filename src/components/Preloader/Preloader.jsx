import React, { Fragment } from "react";
import styles from './Preloader.module.css'

let Preloader = () => {
    return (        
        <Fragment>
            <div className={styles.lds_dual_ring}></div>
        </Fragment>
    )
}

export default Preloader;