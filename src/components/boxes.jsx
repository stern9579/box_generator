import react, { useState } from 'react';


const Box = (props) => {
    return (
        <div style={{display: "flex"}}>
            {props.boxes.map((box, i) =>
                <div className="box" key={i} style = {{backgroundColor: box.color, width: box.size+"px", height: box.size+"px"}}></div>)}
        </div>
    )
};

export default Box;