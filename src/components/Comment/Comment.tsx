import Avatar from "../Avatar/Avatar";
import { Trash, ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'

function Comment(){
    return(
        <div className={styles.wrapper}>
            <Avatar src='https://github.com/maykbrito.png'hasBorder={false}/>
            <div className={styles.right}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.userInfo}>
                            <strong>Marcus Moreira</strong>
                            <span>Cerca de 2hs</span>
                        </div>
                        <button><Trash /></button>
                    </div>
                    <p>Muito bom Marcão, parabéns!! 👏👏</p>
                </div>
                <div className={styles.footer}>
                        <a href=""><ThumbsUp/> Aplaudir <span>19</span></a>
                </div>
            </div>
        </div>
    )
}

export default Comment