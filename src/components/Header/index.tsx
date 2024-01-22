import todoLogo from "@/assets/todo-logo.svg";
import styles from "./styles.module.css";

export function Header() {
    return (
        <header className={styles['header-container']}>
            <img src={todoLogo} alt="Logo" />
        </header>
    )
}