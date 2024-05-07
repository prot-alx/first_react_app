import { Fragment, useState } from "react"
import styles from './ModalText.module.css';


export const ModalWindow = ({setModalIsOpen, modalIsOpen}) => {

    const [name, setName] = useState('');

    return (
        <Fragment>
            <div
                className={`${styles.overlay} ${modalIsOpen && styles.visible}`}
                onClick={() => setModalIsOpen(false)}>
            </div>
            <div className={`${styles.modal} ${modalIsOpen && styles.visible}`}>
                <div onClick={() => setModalIsOpen(false)}>X</div>
                <h2>Заказать обратный звонок</h2>
                <form action="#">
                    <input onChange={e => setName(e.target.value)} type="text" placeholder="Имя" value={name}/>
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="Телефон" />
                    <button onClick={() => alert(name)}>Заказать звонок</button>
                </form>
            </div>
        </Fragment>
    )
}
