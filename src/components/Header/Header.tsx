import styles from './Header.module.css'
import imgLogo from '../../assets/imgLogo.svg'

function Header(){

    return(
        <header className={styles.header}>
            <img src={imgLogo} alt="Veio Feed" />
            <strong>Véio Feed</strong>
        </header>
    )
}

export default Header