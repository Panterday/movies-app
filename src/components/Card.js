import { Link } from 'react-router-dom';
import styles from './Card.module.css'

export function Card ({movie}){
    const imgUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path; 
    return(
        <div className={styles.cardStyle}>
            <Link to={"/movie/"+movie.id}><img src={imgUrl} alt={movie.title} className={styles.imgStyles}></img></Link>
            <p>{movie.title}</p>
        </div>
    )
}