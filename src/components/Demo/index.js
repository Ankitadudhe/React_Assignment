import React from 'react';

const Demo=(props)=>{
    console.log("in demo ");
    return(
<>
<p>{props.show ? "This is new ":""}</p>
</>
)
}
// export default Demo;
export default React.memo(Demo)