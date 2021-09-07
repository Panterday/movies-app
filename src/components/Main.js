import styles from './Main.module.css'
import { Card } from './Card'
import { useEffect, useState } from 'react'
import { get } from '../helpers/httpClient';
import { Preload } from './Preload';
import { useLocation } from 'react-router';

const useQuery= ()=>{
    return new URLSearchParams(useLocation().search); 
}

export function Main () {
    const [movies, setMovies] = useState([]); 
    const [loading, setLoading] = useState(true);

    const query = useQuery();

    const search = query.get('search');

    useEffect(()=>{
        setLoading(true);
        const searchUrl = search ? '/search/movie?query='+search : '/discover/movie'
        get(searchUrl).then(data => {
            setMovies(data.results);
            setLoading(false);  
        })
    },[search])

    if(loading){
        return <Preload></Preload>
    }

    return(
        <main className={styles.mainDiv}>
            <section className={styles.listMovies}>
                {movies.map((movie)=> <Card key={movie.id} movie={movie}></Card> )}
            </section>
        </main>
    )
}