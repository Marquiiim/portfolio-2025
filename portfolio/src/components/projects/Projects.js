import styles from './Projects.module.css'

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import { useState } from 'react'

import project1 from '../../img/Captura de tela 2025-01-13 140455.png'
import project2 from '../../img/Captura de tela 2025-01-13 140519.png'
import project3 from '../../img/Captura de tela 2025-02-20 151054.png'
import project4 from '../../img/Captura de tela 2025-01-13 152527.png'

import Cards from './cards/cards'

function Projects() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const items = [
        <Cards img={project1} name='Pokedex' code='https://github.com/Marquiiim/Pokedex' hosting='https://marquiiim.github.io/pokedex/' tec='JS, React, CSS, HTML, Sass' />,
        <Cards img={project2} name='Loja de celular' code='https://github.com/Marquiiim/loja-iphone' hosting='https://marquiiim.github.io/loja-iphone/' tec='JS, React, CSS, HTML, Sass' />,
        <Cards img={project3} name='Costs' code='https://github.com/Marquiiim/costs-project' hosting='https://marquiiim.github.io/costs-project/' tec='JS, React, CSS, HTML, Sass' />,
        <Cards img='' name='Luxure Store' code='' hosting='' tec='JS, React, CSS, HTML, Sass' />,
        <Cards img='' name='Concessionária' code='' hosting='' tec='JS, React, CSS, HTML, Sass' />,
        <Cards img='' name='Cadastro de Usuários' code='' hosting='' tec='JS, React, MongoDB, Axios, CSS, HTML' />,
        <Cards img={project4} name='Portfolio Antigo' code='https://github.com/Marquiiim/portfolio' hosting='https://marquiiim.github.io/portfolio/' tec='JS, CSS, HTML' />,
    ]

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % items.length)
    }

    const prev = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? items.length - 3 : prevIndex - 3)
    }

    const getVisibleItems = () => {
        const endIndex = currentIndex + 3
        if (endIndex > items.length) {
            return [...items.slice(currentIndex), ...items.slice(0, endIndex % items.length)]
        } else {
            return items.slice(currentIndex, endIndex)
        }
    }

    return (
        <section className={styles.container} id='projects'>
            <div>
                <h1>
                    Projetos
                </h1>
            </div>
            <div className={styles.content}>
                <button onClick={prev} className={styles.arrow_left}>
                    <FiArrowLeft />
                </button>
                <div className={styles.carousel}>
                    {getVisibleItems().map((item, index) => (
                        <div key={index} style={{ flex: '0 0 33.33%' }}>
                            {item}
                        </div>
                    ))}
                </div>
                <button onClick={next} className={styles.arrow_right} >
                    <FiArrowRight />
                </button>
            </div>
        </section>
    )
}

export default Projects