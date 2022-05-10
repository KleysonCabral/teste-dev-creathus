import styles from './styles.module.css'

interface MovieToCatalog {
    id: string;
    title: string;
    author: string;
    image: string;
}

interface MovieThumbnailProps {
    movie: MovieToCatalog
}

export function MovieThumbnail({ movie }: MovieThumbnailProps) {
    return (
        <a href='#' className={styles.container}>
            <section className={styles.frame}>
                <img
                    className={styles.image}
                    src={movie.image}
                />
            </section>

            <p>{movie.author}</p>
            <h4>{movie.title}</h4>
        </a>
    )
}