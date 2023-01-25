import React, { useState } from 'react';

import { useRouter } from 'next/router'

const DropdownMenu = ({
    Items
}) => {
    let Visibility = false;
    function DropdownItemLink(){
        Visibility = !Visibility;
    }
    return <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

        <div className='DropdownButton' onClick={() => DropdownItemLink()}>

            <div className='HowToCenterMiddle'>
                <div>
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                </div>
            </div>


        </div>
        <div className='Dropdown'>
            {Items && Items.map((Content) => (
                <div 
                className={!Visibility ? 'IsDropdownOpenFalse Hideable' : 'IsDropdownOpenTrue Hideable'} 
                key={Content.Position} 
                onClick={() => DropdownItemLink()}>
                     <div className="AltHoverableLink">{Content.Title}</div>
                </div>
            ))}
        </div>
    </div>
};
export default DropdownMenu;