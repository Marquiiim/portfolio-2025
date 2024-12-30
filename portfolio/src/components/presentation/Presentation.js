import styles from './Presentation.module.css'
import logo from '../../img/4882524.png'

import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from 'react-icons/fa'
import { IoClipboardSharp } from "react-icons/io5";

function Presentation() {

    return (
        <section className={styles.presentation}>
            <div>
                <h1>
                    Marcos Gabriel
                </h1>
                <p>
                    Desenvolvedor Front-End
                </p>
                <span>
                    <a href='https://drive.google.com/file/d/1YlNHCoWDIDJUcI_vjD1nutqEKr52EqnM/view?usp=drive_link'>
                        <IoClipboardSharp className={styles.social} />
                    </a>
                </span>
                <span>
                    <a href='https://www.linkedin.com/in/marcos-gabriel-05287a322/'>
                        <FaLinkedin className={styles.social} />
                    </a>
                </span>
                <span>
                    <a href='https://github.com/Marquiiim'>
                        <DiGithubBadge className={styles.social} />
                    </a>
                </span>
            </div>
            <div>
                <img src={logo} alt="Logo" />
            </div>
        </section>
    )
}

export default Presentation