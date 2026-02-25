import styles from './Projects.module.css'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import Cards from './cards/cards'

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const itemsPerPage = 3

    const projectsData = [
        { name: 'Projeto Luxure Store', code: 'https://github.com/Marquiiim/luxure-store', hosting: '', tec: 'JS, React, SASS' },
        { name: 'Projeto AutoManager', code: 'https://github.com/Marquiiim/loja-veiculos', hosting: '', tec: 'JS, SASS, React, MySQL, Express, Axios' },
        { name: 'Projeto BarberControl', code: 'https://github.com/Marquiiim/marcos-barbearia', tec: 'JS, SASS, React, MySQL, Express, Axios' },
        { name: 'Projeto PatrimonyControl', code: 'https://github.com/Marquiiim/Sistema-CD-342', tec: 'JS, SASS, React, MySQL, Express, Axios' },
        { name: 'Projeto TMSystem', code: 'https://github.com/Marquiiim/Sistema-CD-342', tec: 'JS, SASS, React, MySQL, Express, Axios' },
    ]

    const totalItems = projectsData.length
    const maxIndex = Math.max(0, totalItems - itemsPerPage)

    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex)
        }
    }, [currentIndex, maxIndex])

    const next = () => {
        setCurrentIndex(prev => Math.min(prev + itemsPerPage, maxIndex))
    }

    const prev = () => {
        setCurrentIndex(prev => Math.max(prev - itemsPerPage, 0))
    }

    const getVisibleItems = () => {
        return projectsData.slice(currentIndex, currentIndex + itemsPerPage)
    }

    const visibleItems = getVisibleItems()

    return (
        <section className={styles.container} id='projects'>
            <div>
                <h1>Projetos</h1>
            </div>

            <div className={styles.content}>
                <button
                    onClick={prev}
                    className={`${styles.arrow_left} ${currentIndex === 0 ? styles.disabled : ''}`}
                    disabled={currentIndex === 0}
                >
                    <FiArrowLeft />
                </button>

                <div className={styles.carousel}>
                    {visibleItems.length > 0 ? (
                        visibleItems.map((project, index) => (
                            <div key={`${currentIndex}-${index}`} className={styles.carouselItem}>
                                <Cards
                                    name={project.name}
                                    code={project.code}
                                    hosting={project.hosting}
                                    tec={project.tec}
                                />
                            </div>
                        ))
                    ) : (
                        <div className={styles.emptyState}>
                            <p>Nenhum projeto disponível</p>
                        </div>
                    )}
                </div>

                <button
                    onClick={next}
                    className={`${styles.arrow_right} ${currentIndex >= maxIndex ? styles.disabled : ''}`}
                    disabled={currentIndex >= maxIndex}
                >
                    <FiArrowRight />
                </button>
            </div>
        </section>
    )
}

export default Projects