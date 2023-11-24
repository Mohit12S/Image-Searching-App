import {useState} from 'react'; 
import Searchbar from "./components/SearchBar";
import searchImage from "./api";
import ImageList from "./components/ImageList"

function App(){
    const [images , setImages] = useState([]);

    const handleSubmit = async (term) => {
        // console.log('Search a Image with' , term);
        const result = await searchImage(term);

        setImages(result);
    }

    return (
        <div>
        <Searchbar onSubmit={handleSubmit}/>
        <ImageList images={images}/>
        </div>
    );
}

export default App;