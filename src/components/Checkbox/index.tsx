import { Input } from "@components/Input";
import { Check } from "@phosphor-icons/react";
import { ComponentProps, PropsWithChildren } from "preact/compat";

import styles from "./style.module.css";

type CheckboxProps = ComponentProps<'label'> & {
    inputId: number;
    isChecked: boolean;
};

export function Checkbox({inputId, isChecked, children, ...props}:PropsWithChildren<CheckboxProps>) {
    const checkedClassName = isChecked ? styles['checkbox-checked'] : styles['checkbox-unchecked'];
    return (
        <label htmlFor="checkbox" {...props}>
            <Input 
                type="checkbox" 
                checked={isChecked}
                readOnly 
                style={{ display: 'none' }} 
             />
             <div className={styles['checkbox-container']}>
                <span className={`${styles.checkbox} ${checkedClassName}`}>
                    {isChecked && <Check size={12} />}
                </span>
            </div>
            {children}
        </label>
    )
}