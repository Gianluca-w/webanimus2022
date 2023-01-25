import React, { useState } from 'react';
const DropdownMenu = ({
    Items
}) => {
    const [dropdownVisibility, setVisibility] = useState(false);
    return <div>
        <div className='DropdownButton' onClick={() => setVisibility(!dropdownVisibility)}></div>
        <div className='Dropdown'>
            {Items && Items.map((Content) => (
                <div className={dropdownVisibility ? 'IsDropdownOpenFalse Hideable' : 'IsDropdownOpenTrue Hideable'} key={Content.Position}>{Content.Title}</div>
            ))}
        </div>
    </div>
};
export default DropdownMenu;