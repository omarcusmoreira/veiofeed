import styles from './Avatar.module.css'

type Props = {
    src: string;
    hasBorder?: boolean;
}

function Avatar({ 
    src, 
    hasBorder = true
 }: Props){
    return(
        <img 
            src={src} 
            className={ hasBorder ? styles.avatarWithBorder : styles.avatar }
        />
    )
}

export default Avatar