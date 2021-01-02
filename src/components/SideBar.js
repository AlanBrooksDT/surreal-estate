import React, { useState } from 'react';
import '../styles/SideBar.css';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import qs from 'qs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch  } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {

    const {  search  } = useLocation();
    const [query, setQuery] = useState("");
    const history = useHistory();

    const buildQueryString = (operation, valueObj) => {
        
        const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    
        const newQueryParams = {
            ...currentQueryParams,
            [operation]: JSON.stringify({
                ...JSON.parse(currentQueryParams[operation] || '{}'),
                ...valueObj,
            }),
    };
        return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
    };    

    const handleSearch = event => {
        event.preventDefault();
        const newQueryString = buildQueryString('query', { title: { $regex: query } });
        history.push(newQueryString);
    }

    return (
        <div className="sideBar">
            <form onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" id="btn"><FontAwesomeIcon icon={faSearch} /></button>
            </form>

            <ul className="sideBar-links">
                <li className="sideBar-links-item-heading">
                Filter by city:
                </li>
                <li className="sideBar-links-item">
                <NavLink to={buildQueryString('query', { city: 'Manchester' })}>Manchester</NavLink>
                </li>
                <li className="sideBar-links-item">
                <NavLink to={buildQueryString('query', { city: 'Leeds' })}>Leeds</NavLink>
                </li>
                <li className="sideBar-links-item">
                <NavLink to={buildQueryString('query', { city: 'Sheffield' })}>Sheffield</NavLink>
                </li>
                <li className="sideBar-links-item">
                <NavLink to={buildQueryString('query', { city: 'Liverpool' })}>Liverpool</NavLink>
                </li>
                <li className="sideBar-links-item"></li>
            </ul>
            <ul className="sideBar-links">
                <li className="sideBar-links-item-heading">
                    Sort By:
                </li>
                <li className="sideBar-links-item">
                    <NavLink to={buildQueryString('sort', { price: -1 })}>Price Descending</NavLink>
                </li>
                <li className="sideBar-links-item">
                    <NavLink to={buildQueryString('sort', { price: 1 })}>Price Ascending</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideBar