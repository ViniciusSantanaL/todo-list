import { useState } from "preact/hooks";
import { ListControl } from "./Control";
import { ListHeader } from "./Header";
import { ListItem } from "./Item";
import styles from "./styles.module.css";
import { EmptyList } from "./Empty";

export type ITask = {
    id: number,
    description: string,
    isFinished: boolean
}

export function List() {
    const [tasks, setTasks] = useState<ITask[]>([]);

    const taskCount = tasks.length;
    const taskFinishedCount = tasks.filter((task) => task.isFinished).length;

    function addTask(description: string) {
        const newTask: ITask = {
            id: new Date().getTime(),
            isFinished: false,
            description
        }
        setTasks((state) => [...state, newTask]);
    }

    function markTaskIsFinishedOrNot(id: number) {
        const updatedTasks = tasks.map((task) => {
            if(task.id === id) task.isFinished = !task.isFinished;
            return task;
        })
        setTasks(updatedTasks);
    }

    function removeTask(id: number) {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    }

    return (
        <>
            <ListControl addTask={addTask}/>
            <ListHeader taskCount={taskCount} taskFinishedCount={taskFinishedCount} />
            {taskCount == 0 && <EmptyList />}
            {taskCount > 0 && 
                <ul className={styles['list-container']}>
                    {tasks.map((item) => 
                        <ListItem 
                            task={item} 
                            markTaskIsFinishedOrNot={markTaskIsFinishedOrNot}
                            removeTask={removeTask}
                        />
                    )}
                </ul>
            }
      </>
    )
}