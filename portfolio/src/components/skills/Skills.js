import styles from './Skills.module.css'

function Skills() {

    return (
        <section className={styles.skills} id='skills'>
            <header className={styles.title}>
                <h1>
                    Habilidades
                </h1>
            </header>
            <div className={styles.content}>
                <section className={styles.category}>
                    <h2>
                        Linguagens
                    </h2>
                    <ul>
                        <li>
                            JavaScript <span>Intermediário</span>
                        </li>
                        <li>
                            TypeScript <span>Básico</span>
                        </li>
                    </ul>
                </section>
                <section className={styles.category}>
                    <h2>
                        Backend
                    </h2>
                    <ul>
                        <li>
                            Node + Bibliotecas <span>Intermediário</span>
                        </li>
                        <li>
                            Express <span>Intermediário</span>
                        </li>
                        <li>
                            Nest <span>Básico</span>
                        </li>
                    </ul>
                </section>
                <section className={styles.category}>
                    <h2>
                        Frontend
                    </h2>
                    <ul>
                        <li>
                            React <span>Intermediário</span>
                        </li>
                        <li>
                            Sass <span>Básico</span>
                        </li>
                        <li>
                            Bootstrap <span>Básico</span>
                        </li>
                    </ul>
                </section>
                <section className={styles.category}>
                    <h2>
                        Banco de dados
                    </h2>
                    <ul>
                        <li>
                            MySQL <span>Intermediário</span>
                        </li>
                        <li>
                            MongoDB <span>Básico</span>
                        </li>
                    </ul>
                </section>
                <section className={styles.category}>
                    <h2>
                        Diversos
                    </h2>
                    <ul>
                        <li>
                            Programação Orientada a Objetos <span>Intermediário</span>
                        </li>
                        <li>
                            Git e GitHub <span>Intermediário</span>
                        </li>
                        <li>
                            Api'sRest <span>Intermediário</span>
                        </li>
                        <li>
                            Microservices <span>Intermediário</span>
                        </li>
                        <li>
                            Docker <span>Básico</span>
                        </li>
                    </ul>
                </section>
            </div>

        </section>
    )
}

export default Skills