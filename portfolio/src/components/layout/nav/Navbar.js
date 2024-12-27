import styles from './Navbar.module.css'

function Navbar() {

    return (
        <nav className={styles.navbar}>
            <ul className={styles.list_nav}>
                <li>
                    <a href="#sobremim">Sobre mim</a>
                </li>
                <li>
                    <a href="#">Habilidades</a>
                </li>
                <li>
                    <a href="#">Sobre Mim</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar