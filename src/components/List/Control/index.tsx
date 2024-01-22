import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { PlusCircle } from "@phosphor-icons/react";

import styles from "./styles.module.css"
import { useState } from "preact/hooks";

type ListControlProps = {
  addTask: (description: string) => void;
}

export function ListControl({ addTask }: ListControlProps) {
    const [inputValue, setInputValue] = useState('');

    function handleAddTask() {
      addTask(inputValue);
      setInputValue('');
    }

    return (
        <div className={styles['list-control-container']}>
          <Input 
            type="text" 
            placeholder="Adicione uma nova tarefa" 
            value={inputValue} 
            onChange={(event) => setInputValue(event.currentTarget.value)}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} />
          </Button>
        </div>
    )
}