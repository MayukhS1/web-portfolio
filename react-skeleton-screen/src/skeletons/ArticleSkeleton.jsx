import React from 'react'
import Shimmer from './Shimmer';
import SkeletonElms from './SkeletonElms'

const ArticleSkeleton = ({ theme }) => {
    const themeClass = theme || 'light';

    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-article">
                <SkeletonElms type="title"/>
                <SkeletonElms type="text"/>
                <SkeletonElms type="text"/>
                <SkeletonElms type="text"/>
            </div>
            <Shimmer/>
        </div>
    )
}

export default ArticleSkeleton
