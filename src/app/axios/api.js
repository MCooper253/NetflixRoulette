import axios from "axios";

export const getMovies = () => {
    axios({
        method: 'get',
        url: 'http://localhost:4000/movies?limit=4',
    })
    .then(function (response){
        console.log(response.data)
    })
    .catch(function (response){
        console.log(response.data)
    });
}