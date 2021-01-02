import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import '../styles/PropertyCard.css';
import logo from '../surreal-estate-logo.png';

const PropertyCard = ({title, type, bathrooms, bedrooms, price, city, email}) => {
        return (
        <div className="property-card">
            <div className="title" data-testid='title-id'>
                {title}
            </div>
            <div className="logo">
            <img className="surreal-logo" src={logo} alt="Surreal Estate Logo" />
            </div>
            <span className="type" data-testid="type-id">{type}</span>
            <span className="bathrooms" data-testid="bathrooms-id"><FontAwesomeIcon icon={faBath} />{bathrooms}</span>
            <span className="bedrooms" data-testid="bedrooms-id"><FontAwesomeIcon icon={faBed} />{bedrooms} </span>
            <span className="price" data-testid='price-id'>£ {price}</span>
            <span className="city" data-testid='city-id'>Location: {city}</span>
            <a href={email} className="emailButton" data-testid='email-id'><FontAwesomeIcon icon={faEnvelopeOpenText} /></a>
        </div>
    )
}

export default PropertyCard;