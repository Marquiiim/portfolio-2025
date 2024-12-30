import styles from './Cards.module.css'

import { DiCodeBadge } from "react-icons/di";
import { FiAirplay } from "react-icons/fi";

function Cards( {img, name, tec, code,  hosting} ) {

    return (
        <div className={styles.content}>
            <div>
                <img src={img} />
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
                Tecnologias:
                <span>
                    {tec}
                </span>
            </span>
        </div>
    )
}

export default Cards