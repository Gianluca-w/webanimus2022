import React, { useState } from 'react';
const DropdownMenu = ({
    Items
  }) => {
    const [dropdownVisibility, setVisibility] = useState(false);
    return <div className='' onClick={()=>setVisibility(!dropdownVisibility)}>{Items && Items.map((Content)=>(
        <div className={dropdownVisibility ? 'False' : 'True'} key={Content.Position}>{Content.Title}</div>
    ))}</div>
  };
  export default DropdownMenu;