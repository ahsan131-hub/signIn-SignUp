import React from 'react';

export function Headings({text,fontSize,fontWeight,...props}) {
    return (
        <div style={{fontSize:fontSize,fontWeight:fontWeight}}>{text}</div>
    );
}
