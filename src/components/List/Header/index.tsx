import styles from './styles.module.css'

type ListHeaderProps = {
    taskCount: number
    taskFinishedCount: number
}

export function ListHeader({ taskCount, taskFinishedCount }: ListHeaderProps) {
    return (
        <header className={styles['list-header-container']}>
            <aside>
                <p>Tarefas criadas</p>
                <span>{taskCount}</span>
            </aside>
            <aside>
                <p>Concluídas</p>
                <span>{taskFinishedCount ? `${taskFinishedCount} de ${taskCount}` : 0 }</span>
            </aside>
        </header>
    )
}