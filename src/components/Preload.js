import { ImSpinner10 } from "react-icons/im";
import styles from './Preload.module.css'

export const Preload = ()=>{
    return(
        <div className={styles.divSpinner}>
            <ImSpinner10 size={60} color='whitesmoke' className={styles.spinning}></ImSpinner10>
        </div>
    )
}