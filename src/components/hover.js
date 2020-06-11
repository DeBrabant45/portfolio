import React from 'react'
import styles from '../components/hover.module.css'

const Hover = (props) => (
    <div className={styles.container}>
        <img src={props.image} className={styles.image}/>
        <div className={styles.overlay}>
            <div className={styles.text}>
                <h4>{props.desc}</h4>
            </div>
            <a className={styles.buttonCodeLink} href={props.codelink}>View Code</a>
            <a className={styles.buttonWebLink} href={props.weblink}>View Page</a>
        </div>
    </div>
)

export default Hover