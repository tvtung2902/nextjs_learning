import styles from './style.module.scss'

export default function CSSModule(){
    return(
        <div className={styles.wrap}>
            <h1 className={styles.wrap__title}>
                test scss module
            </h1>
        </div>
    )
}