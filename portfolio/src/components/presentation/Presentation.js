import styles from './Presentation.module.css'

import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from 'react-icons/fa'
import { IoClipboardSharp } from "react-icons/io5";

function Presentation() {
    return (
        <section className={styles.presentation}>
            <div className={styles.content}>
                <h1>
                    Marcos Gabriel
                </h1>
                <p>
                    Desenvolvedor de Software
                </p>
                <div className={styles.socialContainer}>
                    <span data-tooltip='Currículo'>
                        <a href='https://drive.google.com/file/d/1oiECJhHEthjhf5Lxk-PBI7frEF06bYuS/view?usp=sharing'>
                            <IoClipboardSharp className={styles.social} />
                        </a>
                    </span>
                    <span data-tooltip='LinkedIn'>
                        <a href='https://www.linkedin.com/in/marcos-gabriel-05287a322/'>
                            <FaLinkedin className={styles.social} />
                        </a>
                    </span>
                    <span data-tooltip='Github'>
                        <a href='https://github.com/Marquiiim'>
                            <DiGithubBadge className={styles.social} />
                        </a>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Presentation