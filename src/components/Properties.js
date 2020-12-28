import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Properties.css';
import PropertyCard from './PropertyCard';
import Alert from './Alert';
import SideBar from './SideBar';
import { useLocation } from "react-router-dom";

const Properties = () => {

  const initialState = { 
    alert: {
        message: 'Please see available properties:',
    },
};

  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState(initialState.alert);

  /*useEffect takes two parameters - an inline function and an array of props that upon changing will trigger the function to rerun. We are using an empty array [] here, therefore not watching for any changing props, as we only want this hook to run once when the component initialises or mounts.*/  
  const { search } = useLocation();
  useEffect(() => {
    axios.get(`http://localhost:4001/api/v1/PropertyListing${search}`)
        .then(({ data }) => setProperties(data))
        .then(() => 
                setAlert({
                    message: "Property List:",
                    isSuccess: true,
                })
            )
    .catch(() =>
      setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
      })
    )
  }, [search]) 

    return (
      <>  
       
        <div className="properties">
            Properties Page
        </div>  
        <div className="messageDisplay">
          <Alert message={alert.message} success={alert.isSuccess} />
        </div>
        <div className="sideBar">
          <SideBar/>
        </div>
        <div className="cards">
          {properties.map(property => (
          <PropertyCard key={property._id} {...property} />
          ))}
        </div>
      </>
    )
}

export default Properties;