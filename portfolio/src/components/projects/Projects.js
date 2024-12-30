import styles from './Projects.module.css'

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
                <Cards img='' name='Pokedex' code='https://github.com/Marquiiim/Pokedex' hosting='https://marquiiim.github.io/Pokedex/' tec='' />
                <Cards img='' name='Loja de celular' code='https://github.com/Marquiiim/loja-iphone' hosting='https://marquiiim.github.io/loja-iphone/' tec='' />
                <Cards img='' name='Página de Login' code='https://github.com/Marquiiim/Pag-Login' hosting='' tec='' />
                <Cards img='' name='Unknow' code='' hosting='' tec='' />
            </div>
        </section>
    )
}

export default Projects