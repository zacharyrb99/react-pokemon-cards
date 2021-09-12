import {useState} from 'react';
import axios from 'axios';

const useAxios = () => {
    const [state, setState] = useState([]);

    const addCard = async (baseUrl, query='') => {
        const res = await axios.get(`${baseUrl}${query}`);
        setState(state => [...state, {...res.data}]);
    }

    const clearState = () => setState([]);

    return [state, addCard, clearState];
}

export default useAxios;