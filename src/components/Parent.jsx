import React from 'react';
import Child from './child';


export default function Parent() {
    const [value, setValue] = React.useState("");

    function handleChange1(newValue) {
      setValue(newValue);
    }

    // We pass a callback to Child
    console.log(value)
    return <Child value={value} onChange={handleChange1} />;
    
}