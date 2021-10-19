import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';

const PeersList = (props) => {
    const {removeDrawingsById} = props;
    const { id, name ,isConnect} = props
    const [isDisplayDrawings,setIsDisplayDrawings] = useState(true);
    const drawById= ()=>{
        // debugger
        removeDrawingsById(id,!isDisplayDrawings)
        setIsDisplayDrawings(!isDisplayDrawings)

    }
    return (
        <>
            <Button className="m-1"  variant={isDisplayDrawings?"primary":"secondary"} onClick={(e) => { drawById() }}  >
                {name}
            </Button>
         
        </>
    )
}
export default PeersList;