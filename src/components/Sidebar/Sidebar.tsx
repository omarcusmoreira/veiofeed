import Avatar from '../Avatar/Avatar'
import styles from './Sidebar.module.css'
import { PencilSimpleLine } from 'phosphor-react'

function Sidebar(){
    return(
        <aside className={styles.wrapper}>
            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80" />
            <main>
                <Avatar src='https://github.com/maykbrito.png'/>
                <strong>
                    Marcus Moreira
                </strong>
                <span>
                    Web Developer
                </span>
            </main>
            <footer>
                <a href='#'>
                    <PencilSimpleLine />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}

export default Sidebar