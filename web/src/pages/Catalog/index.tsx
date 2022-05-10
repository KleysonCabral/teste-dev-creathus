import { MovieThumbnail } from '../../components/MovieThumbnail'
import { Sidebar } from '../../components/Sidebar'
import styles from './styles.module.css'


export function Catalog() {
    return (
        <article className={styles.container}>
            <Sidebar/>
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
            <Footer/>
        </article>
    )
}