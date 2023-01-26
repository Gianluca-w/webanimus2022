import React, { useState } from 'react';
import { useRouter } from 'next/router'



const DropdownMenu = ({
    Items
}) => {
    const router = useRouter();
    const [visible, setVisible] = useState(false);

    const HandleClick = (Href) => {
        setVisible(!visible);
        router.push(Href);
    }
    return <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />


        <div className={`Dropdown Hideable ${!visible ? 'IsDropdownOpenFalse' : 'IsDropdownOpenTrue'}`}>
            
            <div className={'DropdownItem'}
                onClick={() => setVisible(!visible)}>
                <div className={`AltHoverableLink HowToCenterMiddle DropdownItemTitle`}>
                    <div className='HamburgerMenuAnimated'>
                        <div className={`HamburguerMenuFStripe ${!visible ? '' : 'CrossTheHamburgerPart1'}`}></div>
                        <div className={`HamburguerMenuSStripe ${!visible ? '' : 'CrossTheHamburgerPart2'}`}></div>
                        <div className={`HamburguerMenuTStripe ${!visible ? '' : 'CrossTheHamburgerPart3'}`}></div>
                    </div>
                </div>
            </div>
            {Items && Items.map((Content) => (
                <div
                    className={'DropdownItem'}
                    key={Content.Position}
                    onClick={() => HandleClick(Content.Href)}>
                    <div className="AltHoverableLink HowToCenterMiddle DropdownItemTitle">{Content.Title}</div>
                </div>
            ))}
        </div>
    </div>
};
export default DropdownMenu;