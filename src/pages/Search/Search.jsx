import React from 'react'
import { useDispatch } from 'react-redux';
import { setViewAction } from '../../redux/actions/actions';

const Search = () => {
    const dispatch = useDispatch();
    dispatch(setViewAction('search'))

    return (
        <div>Search</div>
    )
}

export { Search };