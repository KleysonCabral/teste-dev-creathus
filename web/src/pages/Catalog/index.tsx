import { MovieThumbnail } from '../../components/MovieThumbnail'
import { Sidebar } from '../../components/Sidebar'
import styles from './styles.module.css'

const movies = [
    { id: '1', title: 'The Old Guard', author: 'Gina Prince-Bythewood', image: 'https://br.web.img3.acsta.net/pictures/20/07/08/20/51/3883420.jpg' },
    { id: '2', title: 'The Old Guard', author: 'Gina Prince-Bythewood', image: 'https://br.web.img3.acsta.net/pictures/20/07/08/20/51/3883420.jpg' },
    { id: '3', title: 'The Old Guard', author: 'Gina Prince-Bythewood', image: 'https://br.web.img3.acsta.net/pictures/20/07/08/20/51/3883420.jpg' },
    { id: '4', title: 'Mad Max: Estrada da Fúria', author: 'George Miller', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpnQjWo2k0DvZYsww2561is7S_avX8XHtSkY3AImqNZWZStjtE' },
    { id: '5', title: 'The Old Guard', author: 'Gina Prince-Bythewood', image: 'https://br.web.img3.acsta.net/pictures/20/07/08/20/51/3883420.jpg' },
    { id: '6', title: 'The Old Guard', author: 'Gina Prince-Bythewood', image: 'https://br.web.img3.acsta.net/pictures/20/07/08/20/51/3883420.jpg' },
    { id: '7', title: 'The Old Guard', author: 'Gina Prince-Bythewood', image: 'https://br.web.img3.acsta.net/pictures/20/07/08/20/51/3883420.jpg' }
]

export function Catalog() {
    return (
        <div className={styles.container}>
            <Sidebar />

            <main>
                <header className={styles.header}>
                    <h1>Últimos filmes adicionados</h1>

                    <button className={styles.button}>Próximo</button>

                    <p>Próximos filmes</p>
                </header>


                <div className={styles.movies}>
                    { movies.map(movie => <MovieThumbnail key={movie.id} movie={movie} />) }
                </div>
            </main>
        </div>
    )
}