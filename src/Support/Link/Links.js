import React from 'react';
import { Link } from '@material-ui/core';
export function SimpleLinks({name,href="#",handelClick,...props}) {
    return (
        <Link href={href} onClick={handelClick}>{name}</Link>
    );
}
