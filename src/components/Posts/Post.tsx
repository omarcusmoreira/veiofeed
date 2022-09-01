import Avatar from '../Avatar/Avatar'
import Comment from '../Comment/Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'
import { useState } from 'react'
type Props ={
    author: {
        avatarUrl: string;
        name: string,
        position: string,
    };
    content: {
        type: string,
        text: string,
    }[];
    publishedAt: Date;
}

function Post( {author, content, publishedAt}:Props ){

    const formattedDate = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'",{
        locale: ptBR
    })
    const distanceFromPublished = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })
    const [ comments, setComments] = useState([]);
    const [ newCommentText, setNewCommentText] = useState('');

    function handleCreateNewComment(){
        event?.preventDefault()
        setComments(...comments,newCommentText)
    }
    function handleNewCommentChange(event:any){
        setNewCommentText(event.target.value)
    }
    return (
        <article className={styles.wrapper}>
            <header>
                <Avatar src={author.avatarUrl} />
                <div>
                    <strong>{author.name}</strong>
                    <span>{author.position}</span>
                </div>
                <time >{distanceFromPublished}</time>
            </header>

            <main>
                {content.map(line => {
                    if (line.type === 'text') {
                        return(
                            <p>{line.text}</p>
                        )
                    } else if (line.type === 'link') {
                        return (
                            <p><a href="">{line.text}</a></p>
                        )
                    }
                })}
            </main>
            
            <form onSubmit={handleCreateNewComment}>
                <strong>Deixe seu comentário</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={event=>{handleNewCommentChange(event)}}
                />
                <footer className={styles.footerFocus}>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            {comments.map(comment => {
                return(<Comment comment={comment}/>)
            })}
            
        </article>
    )
}

export default Post