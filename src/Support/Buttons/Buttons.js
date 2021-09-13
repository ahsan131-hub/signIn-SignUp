import React from 'react';
import { Button } from '@material-ui/core';
export function SimpleButton({name,color="primary",variant="contained",handelClick,...props}) {
    return (
        <Button variant={variant} color={color} onClick={handelClick} {...props}>{name}</Button>
    );
}
