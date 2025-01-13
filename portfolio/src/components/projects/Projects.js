import styles from './Projects.module.css'

import project1 from '../../img/Captura de tela 2025-01-13 140455.png'
import project2 from '../../img/Captura de tela 2025-01-13 140519.png'

import project3 from  '../../img/Captura de tela 2025-01-13 152015.png'

import Cards from './cards/cards'

function Projects() {

    return (
        <section className={styles.container} id='projects'>
            <div>
                <h1>
                    Projetos
                </h1>
            </div>
            <div className={styles.content}>
                <Cards img={project1} name='Pokedex' code='https://github.com/Marquiiim/Pokedex' hosting='https://marquiiim.github.io/Pokedex/' tec='JS, React, CSS, HTML, Sass' />
                <Cards img={project2} name='Loja de celular' code='https://github.com/Marquiiim/loja-iphone' hosting='https://marquiiim.github.io/loja-iphone/' tec='JS, React, CSS, HTML, Sass' />
                <Cards img={project3} name='To-Do-List' code='https://github.com/Marquiiim/To-Do-List' hosting='https://marquiiim.github.io/To-Do-List/' tec='JS, React, CSS, HTML, Sass' />
            </div>
        </section>
    )
}

export default Projects