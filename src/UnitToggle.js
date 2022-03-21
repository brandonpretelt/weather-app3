// WIP

import React, { useState } from 'react';

function UnitToggle({ c, f }) {
    const [unit, setUnit] = useState('');

    function unitChange(e) {
        const target = e.target;
        if (target.checked) {
            setUnit(target.value);
        }
    }

    return (
        <>
            <form>
                <label>
                    <input
                        type='radio'
                        name='unit'
                        value='f'
                        checked={unit === f}
                        onChange={unitChange}
                    />
                    Fahrenheit
                </label>
                <label>
                    <input
                        type='radio'
                        name='unit'
                        value='c'
                        checked={unit === c}
                        onChange={unitChange}
                    />
                    Celsius
                </label>
            </form>
        </>
    );
}

export default UnitToggle;
