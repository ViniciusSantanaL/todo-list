import { ComponentProps } from "preact"
import styles from "./styles.module.css"

type InputProps = ComponentProps<'input'>

export function Input(props: InputProps) {
    return (
        <input className={styles[`input-${props.type}`]} {...props} />
    )
}