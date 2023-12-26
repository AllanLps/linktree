import styles from "./Links.module.css";

export function Links() {
    function handleClick() {
        alert("☕ Pegue um café e fique tranquilo! O portfolio está em construção.")
    }

    return (
        <ul className={styles.containerUl}>
            <li className={styles.containerLi}>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/allanlps/">
                    Linkedin
                </a>

            </li>
            <li className={styles.containerLi}>
                <a target="_blank" rel='noreferrer' href="https://github.com/AllanLps">
                    Github
                </a>

            </li>
            <li className={styles.containerLi}>

                <a target="_blank" rel='noreferrer' href="https://www.instagram.com/a_llan.lopes/?hl=pt-br ">
                    Instagram
                </a>

            </li>
            <li className={styles.containerLi}>
                <a href="" onClick={handleClick}>
                    Portfolio
                </a>

            </li>
        </ul>
    )
}