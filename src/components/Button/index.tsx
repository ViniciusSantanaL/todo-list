import { Icon, IconProps } from "@phosphor-icons/react";
import { ComponentChildren, ComponentProps, ComponentType, JSX, VNode } from "preact"
import { ForwardRefExoticComponent, PropsWithChildren } from "preact/compat"

import styles from "./styles.module.css";

type ButtonProps = ComponentProps<'button'>;

export function Button({children, ...props}:PropsWithChildren<ButtonProps>) {
    return (
        <button className={styles.button} {...props}>
            {children}
        </button>
    )
}