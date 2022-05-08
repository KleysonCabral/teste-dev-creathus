import styles from './styles.module.css'

export function MovieThumbnail() {
    return (
        <a href='#' className={styles.container}>
            <section className={styles.frame}>
                <img
                    className={styles.image}
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMgO6skAg-mDcdC_vD3AqFe0GbLWnKR1BbfPBeK_vOVZahiiES" 
                    alt="Capa do Filme do Bob Esponja"
                />
            </section>

            <p>Tim Hill</p>
            <h4>Bob Esponja: O Incrível Resgate</h4>
        </a>
    )
}