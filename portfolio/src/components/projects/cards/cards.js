import styles from './Cards.module.css'

import { DiJsBadge, DiSass, DiReact, DiHtml5, DiCss3, DiMongodb } from "react-icons/di";
import { SiAxios, SiExpress } from "react-icons/si";

import { DiCodeBadge } from "react-icons/di";
import { FiAirplay } from "react-icons/fi";

function Cards({ img, name, tec, code, hosting }) {

    const renderIcon = (tech) => {
        switch (tech) {
            case 'JS':
                return <DiJsBadge />
            case 'Sass':
                return <DiSass />
            case 'CSS':
                return <DiCss3 />
            case 'HTML':
                return <DiHtml5 />
            case 'React':
                return <DiReact />
            case 'MongoDB':
                return <DiMongodb />
            case 'Axios':
                return <SiAxios />
            case 'Express':
                return <SiExpress />
            default:
                return null;
        }
    }

    const techArray = tec.split(',').map(tech => tech.trim());

    return (
        <div className={styles.content}>
            <div className={styles.photo_content}>
                <img src={img} alt='project' />
            </div>
            <p>
                {name}
            </p>
            <div className={styles.options_card}>
                <span>
                    <a href={hosting}>
                        <FiAirplay className={styles.options} />
                    </a>
                </span>
                <span>
                    <a href={code}>
                        <DiCodeBadge className={styles.options} />
                    </a>
                </span>
            </div>
            <span className={styles.technologies}>
                <span className={styles.techn}>
                    Tecnologias:
                </span>
                <span>
                    {techArray.map((tech, index) => (
                        <span key={index} className={styles.icon}>
                            {renderIcon(tech)} { }
                        </span>
                    ))}
                </span>
            </span>
        </div>
    )
}

export default Cards