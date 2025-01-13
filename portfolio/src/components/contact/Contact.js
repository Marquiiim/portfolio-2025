import styles from './Contact.module.css'

import emailjs from '@emailjs/browser'

import React, { useState, useRef } from 'react'

function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const form = useRef();
    const templateParams = {
        name: name,
        email: email,
        message: message
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        emailjs.send("gmailMessage", "template_y79vj6q", templateParams, "3lH4px3VlXawkSLIy")
            .then((response) => {
                alert(`${name} seu Email enviado com sucesso!`)
                setName('')
                setEmail('')
                setMessage('')
            }, (err) => {
                alert("Falha ao enviar o email!")
                console.log("ERROR ", err)
            })
    }

    return (
        <section className={styles.container} id='contact'>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>Contato</h1>
                </div>
                <form ref={form} onSubmit={handleSubmit}>

                    <label htmlFor='email'>Nome:</label>
                    <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Nome' required />

                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />

                    <label htmlFor='message'>Mensagem:</label>
                    <textarea name='message' value={message} onChange={(e) => setMessage(e.target.value)} rows="10" cols="50" placeholder="Digite sua mensagem aqui..." required />
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default Contact