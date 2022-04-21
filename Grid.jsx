import React, { useEffect, useState } from 'react'
import Style from "./grid.module.css"

let column = 0;
const Grid = () => {
    const [column, setColumn] = useState(4);

    useEffect(() =>{
        window.addEventListener("resize", () => {
            let widthwin = window.innerWidth;
            if (widthwin > 1000) {
              setColumn(4);
            } else if (widthwin > 800 && widthwin < 1000) {
              setColumn(3);
            } else if (widthwin > 500 && widthwin < 800) {
              setColumn(2);
            } else if (widthwin <500) {
              setColumn(1);
            }
        
        })  
    },[])
    

  return (
    <div className={Style.container}>
      <ul style={{ gridTemplateColumns: `repeat(${column},1fr)` }}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
      </ul>
    </div>
  );
}

export default Grid