import styles from './Navbar.module.css'

function Navbar() {

    return (
        <nav className={styles.navbar}>
            <ul className={styles.list_nav}>
                <li>
                    <a href="#sobremim">Sobre mim</a>
                </li>
                <li>
                    <a href="#skills">Habilidades</a>
                </li>
                <li>
                    <a href="#projects">Projetos</a>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar