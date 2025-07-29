import styles from './Projects.module.css'

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import { useState } from 'react'

import Pokedex from '../../img/Pokedex.png'
import LuxureStore from '../../img/Luxure_Store.png'
import Concessionaria from '../../img/Loja_Veiculos.png'
import CD342 from '../../img/CD_342.png'
import Barbearia from '../../img/Barbearia.png'
import Pythonimg from '../../img/Python_image.png'

import Cards from './cards/cards'

function Projects() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const items = [
        <Cards img={Pokedex} name='Projeto Pokedex' code='https://github.com/Marquiiim/Pokedex' hosting='https://marquiiim.github.io/pokedex/' tec='JS, React, CSS, HTML, SASS' />,

        <Cards img={LuxureStore} name='Projeto Luxure Store' code='https://github.com/Marquiiim/luxure-store' hosting='' tec='JS, React, CSS, HTML, SASS' />,

        <Cards img={Concessionaria} name='Projeto AutoManager' code='https://github.com/Marquiiim/loja-veiculos' hosting='' tec='JS, CSS, HTML, SASS, React, MySQL, Express, Axios' />,

        <Cards img={Pythonimg} name='Projeto Banco' code='https://github.com/Marquiiim/banco-marquim' tec='PY' />,

        <Cards img={Barbearia} name='Projeto BarberControl' code='https://github.com/Marquiiim/marcos-barbearia' tec='JS, CSS, HTML, SASS, React, MySQL, Express, Axios' />,

        <Cards img={CD342} name='Projeto PatrimonyControl' code='https://github.com/Marquiiim/Sistema-CD-342' tec='JS, CSS, HTML, SASS, React, MySQL, Express, Axios' />,
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