import clipboard from "@assets/clipboard.svg";
import styles from "./styles.module.css";

export function EmptyList() {
    return (
        <div className={styles['empty-container']}>
            <img src={clipboard} alt="Prancheta de tarefas" />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}