import styles from './Navbar.module.css'
import { useState, useEffect } from 'react'

function Navbar() {
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['sobremim', 'skills', 'projects', 'contact']
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={styles.navbar}>
            <ul className={styles.list_nav}>
                <li className={activeSection === 'sobremim' ? styles.active : ''}>
                    <a href="#sobremim" className={activeSection === 'sobremim' ? styles.active : ''}>
                        Sobre mim
                    </a>
                </li>
                <li className={activeSection === 'skills' ? styles.active : ''}>
                    <a href="#skills" className={activeSection === 'skills' ? styles.active : ''}>
                        Habilidades
                    </a>
                </li>
                <li className={activeSection === 'projects' ? styles.active : ''}>
                    <a href="#projects" className={activeSection === 'projects' ? styles.active : ''}>
                        Projetos
                    </a>
                </li>
                <li className={activeSection === 'contact' ? styles.active : ''}>
                    <a href="#contact" className={activeSection === 'contact' ? styles.active : ''}>
                        Contato
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar