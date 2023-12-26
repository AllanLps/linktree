import { Card } from "./components/card/Card";
import styles from "./App.module.css";
import "./styles/global.css";
import { Links } from "./components/links/Links";

export default function App() {

  return (
    <section className={styles.container}> 
      <Card/>
      <Links/>
      <footer className={styles.footerApp}>
        <p>follow me! 🚀</p>
      </footer>
    </section>
  )
}

