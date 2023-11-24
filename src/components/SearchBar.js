import {useState} from 'react';
import './SearchBar.css'

function Searchbar({onSubmit}){
    const [term , setTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div className='search-bar'>
            <label></label>
            <form onSubmit={handleSubmit}>
                <input value={term} onChange={handleChange}/>
            </form>
            
        </div>
    );
}

export default Searchbar;