import React from 'react'
import PropTypes from 'prop-types'
import { GiftGridItem } from './GiftGridItem'
// import { getGiftsByCategory } from '../helpers/getGifts'
import { useFetchGifts } from '../hooks/useFetchGifts'

const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([])

    // useEffect(() => {
    //     getGiftsByCategory(category)
    //     .then(setImages);
    // }, [])

    const {data:images, loading} = useFetchGifts(category);
    
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GiftGridItem
                            key={image.id}
                            {...image} />
                    )
                    )
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export {
    GifGrid
}