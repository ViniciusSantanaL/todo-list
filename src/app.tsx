import { Header } from "@/components/Header";
import { List } from "@/components/List";

import styles from "./app.module.css";

export function App() {
  return (
    <main>
      <Header />
      <section className={styles['section-container']}>
        <List />
      </section>
    </main>
  )
}
