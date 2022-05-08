import styles from './styles.module.css'

export function NotFound() {
    return (
        <article className={styles.container}>
            <h1 className={styles.title}>404 | Not found</h1>
        </article>
    )
}