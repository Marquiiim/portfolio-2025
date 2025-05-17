import styles from './Projects.module.css'

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

import { useState } from 'react'

import Pokedex from '../../img/Pokedex.png'
import LojaCelular from '../../img/Loja_Celular.png'
import Costs from '../../img/Costs_Project.png'
import PortAntigo from '../../img/Port_Antigo.png'
import LuxureStore from '../../img/Luxure_Store.png'
import Concessionaria from '../../img/Loja_Veiculos.png'
import CadastroUsuarios from '../../img/Cadastro_Usuarios.jpg'
import CD342 from '../../img/CD_342.png'
import Pythonimg from '../../img/Python_image.png'

import Cards from './cards/cards'

function Projects() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const items = [
        <Cards img={Pokedex} name='Pokedex' code='https://github.com/Marquiiim/Pokedex' hosting='https://marquiiim.github.io/pokedex/' tec='JS, React, CSS, HTML, SASS' />,

        <Cards img={LojaCelular} name='Loja de celular' code='https://github.com/Marquiiim/loja-iphone' hosting='https://marquiiim.github.io/loja-iphone/' tec='JS, React, CSS, HTML, SASS' />,

        <Cards img={Costs} name='Costs' code='https://github.com/Marquiiim/costs-project' hosting='https://marquiiim.github.io/costs-project/' tec='JS, React, CSS, HTML, SASS' />,

        <Cards img={LuxureStore} name='Luxure Store' code='https://github.com/Marquiiim/luxure-store' hosting='' tec='JS, React, CSS, HTML, SASS' />,

        <Cards img={Concessionaria} name='Concessionária' code='https://github.com/Marquiiim/loja-veiculos' hosting='' tec='JS, React, CSS, HTML, SASS' />,

        <Cards img={CadastroUsuarios} name='Cadastro de Usuários' code='https://github.com/Marquiiim/cadastro-usuarios' hosting='' tec='JS, React, MongoDB, Axios, CSS, HTML' />,

        <Cards img={PortAntigo} name='Portfolio Antigo' code='https://github.com/Marquiiim/portfolio' hosting='https://marquiiim.github.io/portfolio/' tec='JS, CSS, HTML' />,

        <Cards img={Pythonimg} name='Banco Marquim' code='https://github.com/Marquiiim/banco-marquim' tec='PY' />,

        <Cards img={CD342} name='CD 342 - Equipamentos' code='https://github.com/Marquiiim/Sistema-CD-342' tec='JS, CSS, HTML, SASS, React, MySQL, Express, Axios' />,
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