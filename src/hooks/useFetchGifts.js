import { useEffect, useState } from 'react';
import { getGiftsByCategory } from '../helpers/getGifts';

const useFetchGifts = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading: true
    });

    useEffect(()=>{
        getGiftsByCategory(category)
        .then(images=>{
            setstate({
                data: images,
                loading: false
            })
        })
    },[category])

    return state
}
export {
    useFetchGifts
}
