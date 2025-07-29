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
                            Python <span>Básico</span>
                        </li>
                        <li>
                            TypeScript <span>Iniciante</span>
                        </li>
                    </ul>
                </section>
                <section className={styles.category}>
                    <h2>
                        Tecnologias
                    </h2>
                    <ul>
                        <li>
                            React <span>Intermediário</span>
                        </li>
                        <li>
                            HTML5 <span>Avançado</span>
                        </li>
                        <li>
                            CSS3 <span>Avançado</span>
                        </li>
                        <li>
                            SASS <span>Intermediário</span>
                        </li>
                        <li>
                            Bootstrap <span>Básico</span>
                        </li>
                        <li>
                            MySQL <span>Intermediário</span>
                        </li>
                        <li>
                            Axios <span>Intermediário</span>
                        </li>
                        <li>
                            Express <span>Intermediário</span>
                        </li>
                    </ul>
                </section>
                <section className={styles.category}>
                    <h2>
                        Básico
                    </h2>
                    <ul>
                        <li>
                            Lógica de Programação <span>Avançado</span>
                        </li>
                        <li>
                            Algoritmos <span>Avançado</span>
                        </li>
                        <li>
                            Programação Orientada a Objetos <span>Intermediário</span>
                        </li>
                        <li>
                            Git e GitHub <span>Avançado</span>
                        </li>
                    </ul>
                </section>
                <section className={styles.category}>
                    <h2>
                        Diversos
                    </h2>
                    <ul>
                        <li>
                            Fundamentos de Desenvolvimento <span>Avançado</span>
                        </li>
                        <li>
                            Pensamento Computacional <span>Avançado</span>
                        </li>
                        <li>
                            API Rest <span>Avançado</span>
                        </li>
                    </ul>
                </section>
            </div>

        </section>
    )
}

export default Skills