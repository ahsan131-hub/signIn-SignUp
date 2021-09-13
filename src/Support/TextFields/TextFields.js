import React from 'react';
import { TextField } from '@material-ui/core';
export function SimpleTextField({value,setValue,label,...props}) {
    return (
        <div>
            <TextField id="standard-basic" label={label} value={value} onChange={(e)=>{
                setValue(e.target.value);
            }} {...props} variant="outlined"/>
        </div>
    );
}
