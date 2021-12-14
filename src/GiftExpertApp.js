import { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';
const GiftExpertApp = () => {

    // const categories = ['One Punch', 'Bleach', 'Black Clover']
    const [categories, setCategories] = useState(['One Punch'])
    // const handleAdd = ()=>{
    //     setCategories(categoriesArray => [...categoriesArray, 'To Love Ru']);
    // }
    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                    )
                }
            </ol>
        </>
    )

}

export {
    GiftExpertApp
}