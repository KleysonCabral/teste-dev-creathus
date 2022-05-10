import { FiHome, FiUser } from 'react-icons/fi'
import styles from './styles.module.css'

export function Sidebar() {
    return(
        <div className={styles.container}>
            <h1 className={styles.brand}>C</h1>

            <div className={styles.links}>
                <a href="#">
                    <FiHome size={26} color="#eb6710" />
                    Início
                </a>

                <a href="#">
                    <FiUser size={26} color="#eb6710" />
                    Adicionar
                </a>
            </div>
        </div>
    )
}