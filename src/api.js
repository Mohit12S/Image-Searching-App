import axios from 'axios';

const searchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos' , {
        headers : {
            Authorization: 'Client-ID feH39GbFyE7S2QPc_Cf6naabyfA9wB47fzqrjhBZ0ks' 
        }, 
        params : {
            query: term
        }
    });

    console.log(response);

    return response.data.results;
};

export default searchImage;