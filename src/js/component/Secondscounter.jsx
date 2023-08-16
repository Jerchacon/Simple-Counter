import React from "react";
import PropTypes from "prop-types";
import { FaRegClock } from 'react-icons/fa';

const SecondsCounter = (Props) => {

    return (
        <>
            <div className="container">
               <div className="icono"> 
               <FaRegClock />
               </div>
                <div className="cubo">{Props.num6}</div>
                <div className="cubo">{Props.num5}</div>
                <div className="cubo">{Props.num4}</div>
                <div className="cubo">{Props.num3}</div>
                <div className="cubo">{Props.num2}</div>
                <div className="cubo">{Props.num1}</div>
            </div>
        </>
    )

}


SecondsCounter.propTypes = {
    num1: PropTypes.number,
    num2: PropTypes.number,
    num3: PropTypes.number,
    num4: PropTypes.number,
    num5: PropTypes.number,
    num6: PropTypes.number,

}

export default SecondsCounter