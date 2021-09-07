import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Preload } from '../components/Preload';
import { get } from '../helpers/httpClient';
import movie from './movie.json'
import styles from './MovieDescription.module.css'
export const MovieDescription = ()=>{
    let {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(()=>{
        setLoading(true);

        get('/movie/'+movieId).then(data => {
            setMovie(data); 
            setLoading(false);
        })
    },[movieId])

    if(loading){
        return <Preload></Preload>
    }
    
    if(!movie){
        return null; 
    }

    const imgUrl = 'https://image.tmdb.org/t/p/w400' + movie.poster_path;
    return (
        <div className={styles.movieDescription}>
            <img src={imgUrl} alt={movie.title} className={styles.imgStyles}></img>
            <section className={styles.textMovieDescription}>
                <p><strong>Title: </strong>{movie.title}</p>
                <p><strong>Description: </strong>{movie.overview}</p>
                <p><strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(", ")}</p>
            </section>
        </div>
    )
}