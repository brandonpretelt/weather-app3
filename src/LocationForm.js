import React, { useState } from 'react';

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
                <input type='submit' value='click here' />
            </form>
        </>
    );
}

export default LocationForm;
