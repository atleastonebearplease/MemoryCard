import styles from "./Card.module.css";

export function Card(props) {
    return (
        <div className={styles.toolCard}>
            <h1>{props.toolName}</h1>
            <div className={styles.toolCard__buttonGroup}>
                <button className={styles.goButton + ' ' + styles.toolCard__button}>Go!</button>
                <button className={styles.optionsButton + ' ' + styles.toolCard__button}>...</button>
            </div>
        </div>
    )
}