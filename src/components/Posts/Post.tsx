import Avatar from '../Avatar/Avatar'
import Comment from '../Comment/Comment'
import styles from './Post.module.css'

function Post(){
    return (
        <article className={styles.wrapper}>

            <header>
                <Avatar src='https://github.com/maykbrito.png' />
                <div>
                    <strong>Marcus Moreira</strong>
                    <span>Web Developer</span>
                </div>
                <time>Publicado há 1 hora</time>
            </header>

            <main>
                <p>Fala galeraa 👋</p>
                <br />
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <br />
                <a href=''>👉jane.design/doctorcare</a>
                <br />{'  '}<br />
                <a href=''>#novoprojeto</a>{'  '}<a href=''>#nlw</a>{'  '}<a href=''>#rocketseat</a>
            </main>
            
            <form>
                <strong>Deixe seu comentário</strong>
                <textarea placeholder='Deixe um comentário'/>
                <footer className={styles.footerFocus}>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <Comment />
            <Comment />

        </article>
    )
}

export default Post