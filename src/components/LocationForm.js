import React, { useState } from 'react';
import './LocationForm.css';

function LocationForm({ cityOrZip }) {
    const [cityZip, setCityZip] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        cityOrZip(cityZip);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={cityZip}
                    onChange={(e) => {
                        setCityZip(e.target.value);
                    }}
                    placeholder='City or zip here...'
                />
                <br />
                <input type='submit' value='Update Location' />
            </form>
        </>
    );
}

export default LocationForm;
