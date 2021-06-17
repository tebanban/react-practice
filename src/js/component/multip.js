import React, {useState} from 'react';



const Multip = () => {
    
    const[times, setTimes]= useState(2);
   // console.log("run");
    return(
        <div className="multip">
            <div>Result: {times} loves</div>
            <button onClick={() =>setTimes(times *2)}> Multipli x 2 </button>
            <button onClick={() =>setTimes(times /2)}> Division / </button>
        </div>

    );

};

export default Multip;