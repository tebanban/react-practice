import React  from 'react';

const Child= (props) => {
console.log(props);
return(
        <div>
       <div> I'm the {props.number} child</div>
       
       </div>
);
};

export default Child 