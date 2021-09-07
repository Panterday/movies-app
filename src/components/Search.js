import styles from './Search.module.css'
import {useState, usteState} from 'react';
import {useHistory} from 'react-router';  

export const Search = ()=>{

    const [searchText, setSearchText] = useState('');

    const history = useHistory();

    const handleSubmit = (event)=>{
        event.preventDefault();
        history.push('/?search='+searchText);
    }

    return (
        <div className={styles.searchContainer}>
            <form className={styles.formStyles} onSubmit={handleSubmit}>
                <input type='text' placeholder="Buscar" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}