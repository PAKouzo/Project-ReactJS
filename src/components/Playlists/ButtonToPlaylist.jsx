import React, { useState } from 'react';
import { GrPlayFill } from "react-icons/gr";

const ButtonToPlaylist = () => {
    return (
        <div>
            <button onClick={fetchData}><GrPlayFill className='GrPlayFill'></GrPlayFill></button>
        </div>
    );
}

export default ButtonToPlaylist;