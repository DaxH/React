import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    };

    const submit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 0) {
            setCategories(categoriesArray => [inputValue,...categoriesArray]);
            setInputValue('')
        }else{
            alert('Ingrese un Valor');
        }
    }

    return (
        <form
            onSubmit={submit}
        >
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Buscar Cartegoria'
            />
        </form>

    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
export {
    AddCategory
}