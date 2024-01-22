import { Trash } from "@phosphor-icons/react"
import { Checkbox } from "@components/Checkbox"
import { ITask } from "@components/List";

import styles from "./styles.module.css"


export type ListItemProps = {
    task: ITask;
    markTaskIsFinishedOrNot: (id: number) => void;
    removeTask: (id: number) => void;
}

export function ListItem({ task, markTaskIsFinishedOrNot, removeTask }: ListItemProps) {
    const paragraphCheckedClassName =  task.isFinished ? styles['description-checked'] : '';
    return (
        <li key={task.id} className={styles['task-container']}>
            <Checkbox 
                inputId={task.id}
                isChecked={task.isFinished}
                onClick={() => markTaskIsFinishedOrNot(task.id)} 
                className={styles['checkbox-container']}
            >
                <p className={`${styles.description} ${paragraphCheckedClassName}`}>{task.description}</p>
            </Checkbox>
            <button onClick={() => removeTask(task.id)} className={styles['trash-button']}>
                <Trash size={16} />
            </button>
        </li>
    )
}