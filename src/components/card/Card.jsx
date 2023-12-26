import styles from "./Card.module.css"

export function Card() {
    return (
        <section className={styles.card}>
            <img
                src="https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?q=100&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className={styles.capa}
            />

            <div className={styles.profile}>
                <img
                    src="https://github.com/AllanLps.png"
                    className={styles.avatar}
                />

                <strong>Allan Lopes</strong>
                <span>Front-end Developer</span>
            </div>
            <footer>
                <p>Contato: </p>

                <ul>
                    <li>
                        <a href="mailto:allanlps20@gmail.com">allanlps20@gmail.com</a>
                    </li>
                    <li>
                        <a target="_blank" rel='noreferrer' href="https://api.whatsapp.com/send?phone=5521969811448" >(21) 96981-1448</a>
                    </li>
                </ul>
            </footer>
        </section>
    )
}