import React, { useState } from 'react';
import '../styles/AddProperty.css';
import axios from 'axios';
import Alert from './Alert';

const AddProperty = () => {

    const initialState = { 
        fields: {
            title: "",
            city: "Manchester",
            price: "",
            type: "Flat",
            bedrooms: "", 
            bathrooms: "",
            email: "",
        },
        alert: {
            message: '',
            isSuccess: false,
        },
    };

    const [fields, setFields] = useState(initialState.fields);

    const [alert, setAlert] = useState(initialState.alert);

    const handleAddProperty = (event) => {
        event.preventDefault();
        setAlert({ message: "", isSuccess: false });
        axios.post('http://localhost:4001/api/v1/PropertyListing', { ...fields })
        .then(() => 
            setAlert({
                message: "Property Added Successfully",
                isSuccess: true,
            })
        )
        .catch(() =>
            setAlert({
                message: "Server error. Please try again later.",
                isSuccess: false,
            })
        )
    }
    
    const handleFieldChange = (event) => {
        setFields({ ...fields, [event.target.name]: event.target.value })
    };

    return (
        <div className="AddProperty">
            Add Property Page
            <div className="container">
            <form onSubmit={handleAddProperty}>
                <Alert message={alert.message} success={alert.isSuccess} />
                <div className="row">
                  <div className="col25">
                    <label htmlFor="title">Title</label>
                  </div>
                  <div className="col75">
                    <input 
                    id="title" 
                    type="text" 
                    name="title" 
                    placeholder="Property Title" 
                    value={fields.title} 
                    onChange={handleFieldChange}
                    />
                  </div>
                </div>
                <div className="row">
                    <div className="col25">
                        <label htmlFor="city">City</label>
                    </div>
                    <div className="col75">
                            <select id="city" name="city" className="dropDownMenu" value={fields.city} onChange={handleFieldChange} >
                                <option value="Manchester">Manchester</option>
                                <option value="Leeds">Leeds</option>
                                <option value="Sheffield">Sheffield</option>
                                <option value="Liverpool">Liverpool</option>
                            </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col25">
                        <label htmlFor="type">Type</label>
                    </div>
                    <div className="col75">
                        <select id="type" name="type" className="dropDownMenu" value={fields.type} onChange={handleFieldChange} >
                            <option value="Flat">Flat</option>
                            <option value="Detached">Detached</option>
                            <option value="Semi-Detached">Semi-Detached</option>
                            <option value="Terraced">Terraced</option>
                            <option value="End of Terrace">End of Terrace</option>
                            <option value="Cottage">Cottage</option>
                            <option value="Bungalow">Bungalow</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col25">
                        <label htmlFor="price">Price £</label>
                    </div>
                    <div className="col75"> 
                        <input id="price" name="price" type="text" value={fields.price} onChange={handleFieldChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col25">
                        <label htmlFor="bedrooms">Bedrooms</label>
                    </div>
                    <div className="col75">
                        <input 
                        id="bedrooms" 
                        name="bedrooms" 
                        type="number"
                        placeholder="Number of bedrooms" 
                        value={fields.bedrooms} 
                        onChange={handleFieldChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col25">
                        <label htmlFor="bathrooms">Bathrooms</label>
                    </div>
                    <div className="col75">
                        <input 
                        id="bathrooms" 
                        name="bathrooms" 
                        type="number"
                        placeholder="Number of bathrooms" 
                        value={fields.bathrooms} 
                        onChange={handleFieldChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col25">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col75">
                        <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="john.smith@email.com" 
                        value={fields.email} 
                        onChange={handleFieldChange}
                        />
                    </div>
                </div>
                <button type="submit" id="btnAddProperty">Add</button>
            </form>
            </div>
        </div>
    );
}

export default AddProperty;