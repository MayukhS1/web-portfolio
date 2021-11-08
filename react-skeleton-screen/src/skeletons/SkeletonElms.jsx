import React from 'react'
import './skeleton.css'

const SkeletonElms = ({ type }) => {
    const classes = `skeleton ${type}`;
    return (
        <div className={classes}>
            
        </div>
    )
}

export default SkeletonElms
