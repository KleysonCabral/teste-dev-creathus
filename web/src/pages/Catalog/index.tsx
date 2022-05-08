import { MovieThumbnail } from '../../components/MovieThumbnail'
import styles from './styles.module.css'

export function Catalog() {
    return (
        <article className={styles.container}>
            <h2 className={styles.title}>Catalog Page</h2>

            <div className={styles.movies}>
                <MovieThumbnail />
                <MovieThumbnail />
                <MovieThumbnail />
                <MovieThumbnail />
                <MovieThumbnail />
                <MovieThumbnail />
                <MovieThumbnail />
                <MovieThumbnail />
                <MovieThumbnail />
                <MovieThumbnail />
                <MovieThumbnail />
            </div>
        </article>
    )
}