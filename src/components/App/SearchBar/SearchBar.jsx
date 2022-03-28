import React from "react";
import './SearchBar.css';

const SearchBar = ({ searchValue, setSearchValue }) => {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };
    return [
        <input
            className='search-bar'
            placeholder='Busca una posada...'
            value={searchValue}
            onChange={onSearchValueChange}
        />,

    ];
}

export { SearchBar };