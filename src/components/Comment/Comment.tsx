import Avatar from "../Avatar/Avatar";
import { Trash, ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'
import { useState } from "react";

type Props = {
    comment: string,
    onDeleteComment: (comment:string) => void;
}
function Comment({comment, onDeleteComment}: Props){

    const [ likeCommentCount, setLikeCommentCount ] =useState(0)

    function handleDeleteComment(){
        onDeleteComment(comment)
    }

    function handleLikeComment(){
        setLikeCommentCount((state)=>{
            return state + 1
        })
    }

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
                        <button 
                            title="Deletar comentário"
                            onClick={handleDeleteComment}
                        >
                            <Trash />
                        </button>
                    </div>
                    <p>{comment}</p>
                </div>
                <div className={styles.footer}>
                        <button onClick={handleLikeComment}>
                            <ThumbsUp/> Aplaudir <span>{likeCommentCount}</span>
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Comment